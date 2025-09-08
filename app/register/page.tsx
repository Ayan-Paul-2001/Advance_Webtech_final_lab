'use client';
import { useState } from 'react';
import axios from 'axios';

interface AdminFormValues {
  fullName: string;
  email: string;
  password: string;
  role: string;
  adminCode: string;
}

export default function Register() {
  const [formData, setFormData] = useState<AdminFormValues>({
    fullName: '',
    email: '',
    password: '',
    role: 'Admin',
    adminCode: ''
  });
  const [errors, setErrors] = useState<Partial<AdminFormValues>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // State management
  const [contactNumber, setContactNumber] = useState('');
  const [contactError, setContactError] = useState('');
  
  // Validation function
  const validateContactNumber = () => {
    const isValid = /^\d{11}$/.test(contactNumber);
    setContactError(isValid ? '' : 'Contact number must be 11 digits');
    return isValid;
  };
  
  // Form JSX
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Contact Number
    </label>
    <input
      type="tel"
      className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
      value={contactNumber}
      onChange={(e) => setContactNumber(e.target.value)}
      pattern="\d{11}"
      title="Please enter exactly 11 digits"
      required
    />
    <span className="text-red-500 text-sm">{contactError}</span>
  </div>

  const validateForm = () => {
    const newErrors: Partial<AdminFormValues> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Invalid email address';
    // Validation regex update
    if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(formData.password)) 
      newErrors.password = 'Password must be 8-16 characters with letters and numbers';
    
    // Input field constraints
    <input
      type="password"
      className={`w-full px-3 py-2 border rounded-lg text-black ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
      value={formData.password}
      onChange={(e) => setFormData({...formData, password: e.target.value})}
      placeholder="••••••••"
      minLength={8}
      maxLength={16}
    />
    if (!formData.role.trim()) newErrors.role = 'Role is required';
    if (!/^[A-Za-z0-9]{4,}$/.test(formData.adminCode)) newErrors.adminCode = 'Admin Code must be alphanumeric';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm() || !validateContactNumber()) return;

    setIsSubmitting(true);
    try {
      await axios.post('http://localhost:3001/auth/register', {
        ...formData,
        contactNumber
      });
      alert('Admin registered successfully!');
    } catch (error) {
      alert(`Registration failed: ${error.response?.data?.message || error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin Registration
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role
            </label>
            <select
              className="w-full px-3 py-2 border rounded-lg text-black bg-gray-100 cursor-not-allowed"
              value={formData.role}
              disabled
            >
              <option>Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Admin Code
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg text-black ${errors.adminCode ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.adminCode}
              onChange={(e) => setFormData({...formData, adminCode: e.target.value})}
              placeholder="ABCD1234"
            />
            {errors.adminCode && (
              <p className="text-red-500 text-sm mt-1">{errors.adminCode}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">
              Full Name
            </label>
            <input
              className={`w-full px-3 py-2 border rounded-lg text-black ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.fullName}
              onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              placeholder="Jane Doe"
            />
            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              className={`w-full px-3 py-2 border rounded-lg text-black ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              placeholder="admin@example.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-3 py-2 border rounded-lg text-black ${errors.password ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              placeholder="••••••••"
              minLength={8}
              maxLength={16}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Contact Number
            </label>
            <input
              type="tel"
              className="w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              pattern="\d{11}"
              title="Please enter exactly 11 digits"
              required
            />
            <span className="text-red-500 text-sm">{contactError}</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-300"
          >
            {isSubmitting ? 'Registering...' : 'Create Admin Account'}
          </button>
        </form>
      </div>
    </div>
  );
}
