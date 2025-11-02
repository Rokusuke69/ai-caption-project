import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="container">
      <div style={{ 
        textAlign: 'center', 
        padding: '80px 20px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          fontSize: '48px', 
          marginBottom: '20px',
          background: 'linear-gradient(45deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45, #FFDC80)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent'
        }}>
          AI Caption
        </h1>
        
        <p style={{ 
          fontSize: '18px', 
          color: '#8e8e8e',
          marginBottom: '40px',
          lineHeight: '1.6'
        }}>
          Share your moments with AI-powered captions. 
          Let artificial intelligence create engaging captions for your photos automatically.
        </p>

        {user ? (
          <Link to="/dashboard" className="btn btn-primary" style={{ fontSize: '16px', padding: '12px 30px' }}>
            Go to Dashboard
          </Link>
        ) : (
          <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
            <Link to="/login" className="btn btn-primary" style={{ fontSize: '16px', padding: '12px 30px' }}>
              Get Started
            </Link>
            <Link to="/login?tab=register" className="btn btn-secondary" style={{ fontSize: '16px', padding: '12px 30px' }}>
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}