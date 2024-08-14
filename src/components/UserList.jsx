import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const UserList = ({ users }) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {users.map((user) => (
        <Card key={user.id}>
          <CardHeader>
            <CardTitle>{user.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500">{user.email}</p>
            <Link to={`/user/${user.id}`} className="text-blue-500 hover:underline mt-2 inline-block">
              View Details
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default UserList;