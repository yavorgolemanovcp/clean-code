function getUserRole(role: string): string {
  const roles = {
      'admin': 'Admin role',
      'editor': 'Editor role',
      'subscriber': 'Subscriber role',
  };
  return roles[role] || 'Unknown role';
}