import React, { Component, ErrorInfo, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class RootErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Unhandled app error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FAF8F5',
          color: '#0B1E3D',
          fontFamily: 'serif',
          padding: '24px',
          textAlign: 'center'
        }}>
          <h1 style={{ fontSize: '28px', marginBottom: '12px', color: '#0B1E3D' }}>
            ANSH BRIDAL MEHANDI ART
          </h1>
          <p style={{ fontSize: '16px', color: '#666', marginBottom: '24px', maxWidth: '500px' }}>
            We encountered a temporary display issue. Please reload the page to view our bridal mehendi collections.
          </p>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 28px',
              backgroundColor: '#0B1E3D',
              color: '#F5D77F',
              border: '2px solid #D4AF37',
              borderRadius: '8px',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <React.StrictMode>
      <RootErrorBoundary>
        <App />
      </RootErrorBoundary>
    </React.StrictMode>
  );
} else {
  console.error('Root element #root not found in document.');
}
