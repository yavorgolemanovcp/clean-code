function getUserRole(role: string): string {
  switch (role) {
      case 'admin':
          return 'Admin role';
      case 'editor':
          return 'Editor role';
      case 'subscriber':
          return 'Subscriber role';
      default:
          return 'Unknown role';
  }
}