function getUserRole(role: string): string {
  if (role === 'admin') {
      return 'Admin role';
  } else if (role === 'editor') {
      return 'Editor role';
  } else if (role === 'subscriber') {
      return 'Subscriber role';
  } else {
      return 'Unknown role';
  }
}
