import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import UserSearch from '../components/UserSearch';
import UserList from '../components/UserList';

const fetchUsers = async (searchTerm) => {
  // This is a mock API call. Replace with your actual API endpoint.
  const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${searchTerm}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users', searchTerm],
    queryFn: () => fetchUsers(searchTerm),
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">User Management</h1>
      <UserSearch onSearch={handleSearch} />
      <div className="mt-4">
        <UserList users={users || []} />
      </div>
    </div>
  );
};

export default UserManagement;