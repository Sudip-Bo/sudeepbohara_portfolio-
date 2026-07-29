# Security Best Practices

This document outlines the security measures implemented in this portfolio and best practices for maintaining security.

## Implemented Security Measures

### HTTP Security Headers

The following security headers are configured in `vercel.json` and `middleware.ts`:

- **X-Content-Type-Options: nosniff** - Prevents MIME type sniffing
- **X-Frame-Options: DENY/SAMEORIGIN** - Prevents clickjacking attacks
- **X-XSS-Protection: 1; mode=block** - Enables XSS protection
- **Referrer-Policy: strict-origin-when-cross-origin** - Controls referrer information
- **Permissions-Policy** - Restricts access to browser features (camera, microphone, geolocation)
- **Strict-Transport-Security (HSTS)** - Enforces HTTPS connections
- **X-DNS-Prefetch-Control** - Controls DNS prefetching

### Environment Variables

- All sensitive data should be stored in environment variables
- `.env.local` is included in `.gitignore` to prevent committing secrets
- Use `.env.example` as a template for required environment variables

### Dependencies

- Regularly update dependencies to patch security vulnerabilities
- Run `npm audit` to check for known vulnerabilities
- Use `npm audit fix` to automatically fix vulnerabilities

## Best Practices

### For Development

1. **Never commit sensitive data:**
   - API keys
   - Database credentials
   - Secret tokens
   - Personal information

2. **Use environment variables:**
   ```bash
   cp .env.example .env.local
   # Add your actual values to .env.local
   ```

3. **Keep dependencies updated:**
   ```bash
   npm update
   npm audit
   npm audit fix
   ```

### For Deployment

1. **Use HTTPS only** - All deployments should use HTTPS
2. **Enable security headers** - Already configured in vercel.json
3. **Monitor for vulnerabilities** - Set up automated security scanning
4. **Use strong passwords** - For any services or databases

### Contact Form Security

The contact form currently uses client-side validation. For production:

1. **Add server-side validation** - Validate all inputs on the server
2. **Implement rate limiting** - Prevent form spam
3. **Use CAPTCHA** - Add reCAPTCHA or similar for bot protection
4. **Sanitize inputs** - Prevent XSS attacks
5. **Use secure form handling** - Consider using services like Formspree, Netlify Forms, or Resend

### API Security (if adding APIs later)

1. **Use authentication** - Implement proper auth for any API endpoints
2. **Rate limiting** - Prevent API abuse
3. **Input validation** - Validate all incoming data
4. **HTTPS only** - Never use HTTP for API calls
5. **CORS configuration** - Properly configure Cross-Origin Resource Sharing

## Regular Maintenance

### Monthly

- Run `npm audit` to check for vulnerabilities
- Update dependencies: `npm update`
- Review security headers configuration

### Quarterly

- Review and update security policies
- Audit third-party services and integrations
- Review access controls and permissions

### Annually

- Complete security audit
- Review and update documentation
- Test incident response procedures

## Reporting Security Issues

If you discover a security vulnerability, please:

1. Do not create a public issue
2. Email: sudeepbohara@gmail.com
3. Include details about the vulnerability
4. Allow time to fix before disclosing

## Resources

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [Vercel Security](https://vercel.com/docs/security)
- [Web Security Guidelines](https://web.dev/security/)
