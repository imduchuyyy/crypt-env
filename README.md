# CryptEnv - Secure Environment Manager with Profile-Based Encrypted Storage

Say goodbye to plain text environment variables in your code.  
**CryptEnv** is a simple, secure, and profile-based way to manage your environment variables using encryption.

## 🚀 Install CryptEnv

```bash
npm install -g @imduchuyyy/crypt-env
```

## 🧑‍💻 Usage
### Set an environment variable
```bash
crypt-env set <key> <value> -p <profile>
```

### Get an environment variable
```bash
crypt-env get <key> -p <profile>
```

### Execute a command with environment variables
```bash
crypt-env exec "<command>" -p <profile>
```

### List all environment variables
```bash
crypt-env print -p <profile>
```

### Help
```bash
crypt-env help [command]
```

## 🔐 How It Works
- AES Encryption: Your environment variables are stored encrypted on disk.
- Profile-Based: You can manage multiple profiles with different encryption keys.
- Password Protection: Every profile is password-protected.

## 🤝 Contributing
Feel free to submit issues and pull requests!

## 📝 License
MIT License