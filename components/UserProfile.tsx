import React from 'react';

interface UserProfileProps {
  userEmail: string;
  onEmailChange: (newEmail: string) => void;
  onPasswordChange: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ userEmail, onEmailChange, onPasswordChange }) => {
  return (
    <div className='max-w-sm mx-auto my-8 p-4 shadow-md rounded bg-white'>
      <h2 className='text-lg font-semibold mb-4'>User Profile</h2>
      <p className='mb-4'>Email: <span className='text-gray-700'>{userEmail}</span></p>
      <div className='flex gap-4'>
        <button onClick={() => onEmailChange('newemail@example.com')} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Change Email</button>
        <button onClick={onPasswordChange} className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Change Password</button>
      </div>
    </div>
  );
};

export default UserProfile;