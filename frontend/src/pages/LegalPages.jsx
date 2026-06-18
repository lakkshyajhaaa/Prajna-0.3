import React from 'react';
import { Shield, FileText, AlertTriangle } from 'lucide-react';

const PageLayout = ({ title, icon, lastUpdated, children }) => (
  <div style={{ maxWidth: '800px', margin: '0 auto', paddingBottom: '4rem' }}>
    <div style={{ marginBottom: '3rem', borderBottom: '1px solid var(--border-highlight)', paddingBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', color: 'var(--accent)' }}>
        {icon}
        <h1 style={{ fontSize: '2.5rem', margin: 0, color: 'var(--text-primary)' }}>{title}</h1>
      </div>
      <p style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-mono)', fontSize: '0.85rem' }}>
        LAST UPDATED: {lastUpdated}
      </p>
    </div>
    <div className="legal-content" style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '0.95rem' }}>
      {children}
    </div>
  </div>
);

export const PrivacyPolicy = () => (
  <PageLayout title="Privacy Policy" icon={<Shield size={32} />} lastUpdated={new Date().toLocaleDateString()}>
    <h3>1. Zero-Knowledge Architecture</h3>
    <p>The Prajna Framework operates on a strictly decentralized, zero-knowledge architecture. Our servers do not persistently store, log, or maintain records of your facial images, mathematical biometric vectors, or identity profiles.</p>
    
    <h3>2. Image Processing</h3>
    <p>When you upload an image for verification, it is transmitted securely to our server and loaded directly into volatile memory (RAM). The image is passed through our neural network pipelines to generate biometric embeddings. Once the inference is complete, the image and all associated mathematical representations are immediately purged from memory. No data is written to our hard drives.</p>
    
    <h3>3. Biometric Wallet (Local Storage)</h3>
    <p>When you "enroll" an identity via the Wallet page, the generated biometric vectors (Stage 1 and Stage 2 embeddings) are returned directly to your device and stored in your browser's local storage. You maintain absolute physical control over your biometric token. Deleting the token from your browser permanently destroys your enrolled identity.</p>
    
    <h3>4. Third-Party Sharing</h3>
    <p>We do not share, sell, or transmit any image data or biometric vectors to third parties. All inference is run on first-party infrastructure.</p>
  </PageLayout>
);

export const TermsOfService = () => (
  <PageLayout title="Terms of Service" icon={<FileText size={32} />} lastUpdated={new Date().toLocaleDateString()}>
    <h3>1. Acceptance of Terms</h3>
    <p>By accessing or using the Prajna Framework, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
    
    <h3>2. Acceptable Use</h3>
    <p>You agree to use the framework only for lawful purposes. You must not use the system to upload images of individuals without their explicit, legally documented consent. The framework is designed for authorized biometric authentication research and implementation.</p>
    
    <h3>3. Intellectual Property</h3>
    <p>The underlying dual-architecture models (MobileFaceNet, InceptionResnetV1) are subject to their respective open-source licenses. The proprietary hierarchical inference engine and routing algorithms remain the intellectual property of the Prajna developers.</p>
    
    <h3>4. Termination</h3>
    <p>We reserve the right to terminate or suspend access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
  </PageLayout>
);

export const Disclaimer = () => (
  <PageLayout title="Legal Disclaimer" icon={<AlertTriangle size={32} />} lastUpdated={new Date().toLocaleDateString()}>
    <h3>1. Experimental Framework</h3>
    <p>The Prajna Framework (v0.2) is currently an experimental biometric security system. While designed for high accuracy and robust privacy, it is provided "AS IS", without warranty of any kind, express or implied.</p>
    
    <h3>2. Not for Mission-Critical Deployment</h3>
    <p>This software has not undergone independent third-party security auditing. It should not be deployed in mission-critical, life-safety, or legally binding security environments without extensive evaluation and compliance with local biometric laws (e.g., BIPA, GDPR).</p>
    
    <h3>3. Limitation of Liability</h3>
    <p>In no event shall the developers or copyright holders be liable for any claim, damages, or other liability, whether in an action of contract, tort, or otherwise, arising from, out of, or in connection with the software or the use or other dealings in the software.</p>
    
    <h3>4. Biometric Law Compliance</h3>
    <p>The deployer of this software is solely responsible for ensuring that the collection, processing, and localized storage of facial biometrics comply with all applicable local, state, and federal privacy regulations.</p>
  </PageLayout>
);
