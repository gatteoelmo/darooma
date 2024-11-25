import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const UserController = {
    create: async (req, res) => {
        const { name, email, password } = req.body;
        try {
            const existingUser = await User.findOne({ email });
            if (existingUser) return res.status(400).json({ message: 'User already exists' });
          
            const user = new User({ name, email, password });
            await user.save();
        
            res.status(201).json({ message: 'User registered successfully', user });
          } catch (error) {
            res.status(500).json({ message: 'Error registering user' });
          }
        },

    login : async (req, res) => {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ message: 'Email not found' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Password incorrect' });

            const token = jwt.sign({ id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(200).json({ user, token });
        } catch (error) {
            res.status(500).json({ message: 'Errore del server' });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.find({__v: 0});
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving users' });
        }
    },

    getUserById: async (req, res) => {
        const userId = req.params.id;
        try {
            const user = await User.findById(userId ,{__v: 0});
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving user' });
        }
    },

    deleteUser: async (req, res) => {
        const userId = req.params.id;
        try {
            const user = await User.findByIdAndDelete(userId);
            if (!user) return res.status(404).json({ message: 'User not found' });
            res.status(200).json({ message: 'User deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user' });
        }
    },

    modifyUser: async (req, res) => {
        try {
          const { id } = req.params;
          const { password, ...otherUpdates } = req.body;
      
          let updates = { ...otherUpdates };
          if (password) {
            updates.password = await bcrypt.hash(password, 10);
          }
      
          const user = await User.findByIdAndUpdate(id, updates, { new: true });
          res.status(200).json({ message: 'User updated successfully', user });
        } catch (error) {
          res.status(500).json({ message: 'Error updating user' });
        }
      }
}
