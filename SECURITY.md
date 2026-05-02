# 🔐 PiTaMi Security Guidelines

## 🛡️ Security Best Practices

### Password Security

✅ **Do:**
- Use strong passwords (min 8 characters, mix of upper/lower/numbers/special)
- Change default admin password immediately
- Use unique passwords for each account
- Store passwords securely
- Enable password reset functionality
- Hash passwords with bcrypt

❌ **Don't:**
- Share passwords via email
- Store passwords in plain text
- Use common/weak passwords
- Hardcode credentials
- Expose passwords in logs
- Use same password everywhere

### API Security

✅ **Do:**
- Use HTTPS/TLS for all connections
- Implement JWT token expiration
- Validate all inputs
- Implement rate limiting
- Use CORS properly
- Add request validation
- Log security events
- Monitor API usage

❌ **Don't:**
- Send credentials in URLs
- Accept unvalidated input
- Allow unlimited requests
- Expose error details
- Use weak encryption
- Log sensitive data
- Disable CORS entirely

### Database Security

✅ **Do:**
- Use MongoDB authentication
- Encrypt sensitive data
- Implement access controls
- Regular backups
- Use prepared statements
- Monitor database access
- Update database software
- Use strong database passwords

❌ **Don't:**
- Expose database credentials
- Use default credentials
- Allow public database access
- Skip backups
- Store passwords unencrypted
- Disable access logs
- Use outdated versions

## 🔑 Key Management

### JWT Secrets

```javascript
// Generate strong JWT secret
const secret = require('crypto').randomBytes(32).toString('hex');
// Output: a1b2c3d4e5f6... (64 characters)
```

**Store in `.env`:**
```env
JWT_SECRET=your_very_long_random_string_here
```

### API Keys

- Store in environment variables
- Rotate keys regularly (every 90 days)
- Use separate keys for dev/staging/production
- Monitor key usage
- Revoke compromised keys immediately

### Stripe Keys

```env
# Never commit these to Git!
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
```

## 🔒 Authentication Security

### Password Hashing

```javascript
// Using bcryptjs (already implemented)
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);
```

### JWT Implementation

```javascript
const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: '7d' }  // Set expiration!
);
```

### Password Reset

- Generate unique reset token
- Set expiration (1 hour recommended)
- Send via email only
- Hash token before storing
- Invalidate after use

## 🛡️ HTTPS/SSL Configuration

### Development
```bash
# Self-signed certificate
openssl req -x509 -newkey rsa:4096 -nodes -out cert.pem -keyout key.pem -days 365
```

### Production
```bash
# Use Let's Encrypt (Free)
# Or purchase from SSL provider
```

### Express Configuration
```javascript
const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

https.createServer(options, app).listen(443);
```

## 🔄 CORS Configuration

### Secure CORS Setup

```javascript
const corsOptions = {
  origin: [
    'http://localhost:3000',      // Frontend
    'http://localhost:3001',      // Admin
    'https://yourdomain.com',     // Production
    'https://admin.yourdomain.com'
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));
```

## 🔍 Input Validation

### Email Validation

```javascript
const emailRegex = /^\S+@\S+\.\S+$/;
if (!emailRegex.test(email)) {
  throw new Error('Invalid email format');
}
```

### Password Validation

```javascript
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
if (!passwordRegex.test(password)) {
  throw new Error('Password must be at least 8 chars with uppercase, lowercase, number, and special char');
}
```

### XSS Prevention

```javascript
const sanitizeHtml = require('sanitize-html');
const cleanInput = sanitizeHtml(userInput);
```

## 📊 Logging & Monitoring

### What to Log

✅ **Log:**
- User login/logout
- Failed login attempts
- Admin actions
- API errors
- Database errors
- Security events

❌ **Don't Log:**
- Passwords
- API keys
- Credit card numbers
- Personal data
- Token values

### Log Storage

```javascript
const fs = require('fs');
const logFile = './logs/security.log';

function logSecurityEvent(event) {
  const timestamp = new Date().toISOString();
  const message = `${timestamp} - ${event}\n`;
  fs.appendFileSync(logFile, message);
}
```

## 🚨 Rate Limiting

### Express Rate Limiter

```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,                   // 100 requests per window
  message: 'Too many requests'
});

app.use('/api/', limiter);

// Stricter for login
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  skipSuccessfulRequests: true
});

app.post('/api/auth/login', loginLimiter, loginController);
```

## 🔐 Data Encryption

### At Rest (Database)

```javascript
const crypto = require('crypto');

function encryptData(data, key) {
  const cipher = crypto.createCipher('aes-256-cbc', key);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
}

function decryptData(encrypted, key) {
  const decipher = crypto.createDecipher('aes-256-cbc', key);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
}
```

### In Transit

- Use HTTPS/TLS for all connections
- Use secure WebSocket (WSS) if needed
- Implement certificate pinning (mobile apps)

## 🧪 Security Testing

### OWASP Top 10 Checks

- [ ] Injection attacks (SQL, NoSQL)
- [ ] Broken authentication
- [ ] Sensitive data exposure
- [ ] XML External Entities (XXE)
- [ ] Broken access control
- [ ] Security misconfiguration
- [ ] XSS attacks
- [ ] Insecure deserialization
- [ ] Using components with known vulnerabilities
- [ ] Insufficient logging & monitoring

### Tools

```bash
# Dependency vulnerability scanning
npm audit

# OWASP ZAP scanning
# Burp Suite testing
# Penetration testing services
```

## 📋 Security Checklist

### Development
- [ ] Never commit secrets to Git
- [ ] Use `.env` for sensitive data
- [ ] Validate all user inputs
- [ ] Use parameterized queries
- [ ] Implement proper error handling
- [ ] Log security events
- [ ] Use HTTPS
- [ ] Enable CORS properly
- [ ] Implement rate limiting
- [ ] Use secure password hashing

### Deployment
- [ ] Use strong admin credentials
- [ ] Configure firewall rules
- [ ] Enable database authentication
- [ ] Set up SSL certificates
- [ ] Configure backup system
- [ ] Enable monitoring & alerts
- [ ] Regular security updates
- [ ] Review access logs
- [ ] Set up log rotation
- [ ] Document security procedures

### Maintenance
- [ ] Regular security audits
- [ ] Dependency updates
- [ ] Penetration testing
- [ ] Security training for team
- [ ] Incident response plan
- [ ] Regular backups
- [ ] Disaster recovery testing
- [ ] Compliance checks

## 📞 Security Incident Response

### If Compromised

1. **Immediate Actions**
   - Take system offline if necessary
   - Change all credentials
   - Review access logs
   - Notify affected users

2. **Investigation**
   - Determine what was accessed
   - Review logs for unauthorized activity
   - Identify vulnerability
   - Document everything

3. **Recovery**
   - Fix the vulnerability
   - Restore from clean backup
   - Update passwords
   - Monitor for further issues

4. **Follow-up**
   - Conduct security audit
   - Implement additional controls
   - Update documentation
   - Train team on prevention

## 🔗 Security Resources

- **OWASP**: https://owasp.org/
- **CWE**: https://cwe.mitre.org/
- **Node.js Security**: https://nodejs.org/en/docs/guides/security/
- **NPM Security**: https://docs.npmjs.com/about-npm-security
- **Let's Encrypt**: https://letsencrypt.org/

## 📞 Reporting Security Issues

Found a security vulnerability?

1. **Don't** post publicly on GitHub
2. **Do** email security@pitami.com with:
   - Description of vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

---

**Security is everyone's responsibility!** 🔐

Last Updated: May 2, 2026
