import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className='max-w-sm mx-auto my-8'>
      <div className='mb-4'>
        <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2'>Email:</label>
        <input type='email' id='email' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' value={email} onChange={e => setEmail(e.target.value)} required />
      </div>

      <div className='mb-6'>
        <label htmlFor='password' className='block text-gray-700 text-sm font-bold mb-2'>Password:</label>
        <input type='password' id='password' className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' value={password} onChange={e => setPassword(e.target.value)} required />
      </div>

      <div className='flex items-center justify-between'>
        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;