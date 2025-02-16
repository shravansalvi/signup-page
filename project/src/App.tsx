import React, { useState } from 'react';
import { Github, Facebook } from 'lucide-react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Main background circles */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-black rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black rounded-full transform translate-x-1/2 translate-y-1/2"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 right-20 w-16 h-16 bg-black rounded-full animate-bounce"></div>
      <div className="absolute bottom-1/3 left-24 w-8 h-8 bg-black rounded-full animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-12 h-12 bg-black rounded-full animate-bounce delay-100"></div>
      <div className="absolute bottom-1/4 right-1/3 w-10 h-10 bg-black rounded-full animate-pulse delay-200"></div>
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
        {/* Adorable title */}
        <div className="mb-8 text-center">
          <h1 className="text-6xl font-bold mb-2 text-black transform -rotate-6">Sign up!</h1>
          <p className="text-xl text-gray-600 transform rotate-2">✨ Join our awesome community ✨</p>
        </div>

        <div className="bg-black text-white rounded-[40px] p-12 w-full max-w-md relative">
          {/* Decorative corner circles */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-black rounded-full border-4 border-white"></div>
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-black rounded-full border-4 border-white"></div>
          <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-black rounded-full border-4 border-white"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-black rounded-full border-4 border-white"></div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-white text-lg">email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white text-black text-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="block text-white text-lg">Phone no</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white text-black text-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-white text-lg">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-md bg-white text-black text-lg focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-white text-black py-4 rounded-full mt-8 font-bold text-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
            >
              START
            </button>
          </form>
        </div>
        
        {/* Social Login Options */}
        <div className="flex items-center space-x-8 mt-8">
          {/* Google */}
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
          </button>
          
          {/* GitHub */}
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            <Github className="w-6 h-6 text-white" />
          </button>
          
          {/* Facebook */}
          <button className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
            <Facebook className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;