import React from 'react';

function TerminalCommands() {
  return (
    <div className="min-h-screen bg-gruvboxOrange text-gruvboxFg flex flex-col items-center justify-center px-8 py-12">
      <h2 className="text-4xl font-bold mb-8 mt-20">Comprehensive Linux Terminal Commands</h2>

      <div className="max-w-4xl">
        <h3 className="text-3xl font-bold mb-4">File and Directory Management</h3>
        <ul className="list-disc list-inside space-y-4 mb-8">
          <li><code className="bg-gruvboxBg p-1 rounded">ls</code> - Lists all files and directories in the current directory.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">cd [directory]</code> - Changes the current directory to the specified one.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">mkdir [directory]</code> - Creates a new directory.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">rm -r [directory]</code> - Deletes a directory and all its contents.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">cp [source] [destination]</code> - Copies files or directories.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">mv [source] [destination]</code> - Moves or renames files or directories.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">chmod [permissions] [file]</code> - Changes the permissions of a file.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">find [path] -name [filename]</code> - Searches for files and directories.</li>
        </ul>

        <h3 className="text-3xl font-bold mb-4">System Monitoring</h3>
        <ul className="list-disc list-inside space-y-4 mb-8">
          <li><code className="bg-gruvboxBg p-1 rounded">top</code> - Displays running processes and system resource usage.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">htop</code> - Interactive process viewer (if installed).</li>
          <li><code className="bg-gruvboxBg p-1 rounded">df -h</code> - Displays disk space usage in a human-readable format.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">free -m</code> - Displays memory usage.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">ps aux</code> - Lists all running processes.</li>
        </ul>

        <h3 className="text-3xl font-bold mb-4">Networking</h3>
        <ul className="list-disc list-inside space-y-4 mb-8">
          <li><code className="bg-gruvboxBg p-1 rounded">ping [hostname]</code> - Sends ICMP requests to test connectivity.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">ifconfig</code> - Displays or configures network interfaces.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">curl [URL]</code> - Transfers data from or to a server.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">scp [source] [destination]</code> - Copies files between hosts over SSH.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">ssh [user]@[host]</code> - Connects to a remote host via SSH.</li>
        </ul>

        <h3 className="text-3xl font-bold mb-4">User Management</h3>
        <ul className="list-disc list-inside space-y-4">
          <li><code className="bg-gruvboxBg p-1 rounded">whoami</code> - Displays the current user.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">sudo adduser [username]</code> - Adds a new user.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">sudo deluser [username]</code> - Deletes a user.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">passwd [username]</code> - Changes a user's password.</li>
          <li><code className="bg-gruvboxBg p-1 rounded">groups [username]</code> - Displays the groups a user belongs to.</li>
        </ul>
      </div>
    </div>
  );
}

export default TerminalCommands;
