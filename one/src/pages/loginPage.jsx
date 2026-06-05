import React, { useState, createContext, useContext, useRef, useEffect } from 'react';

const AuthContext = createContext();

export default function App() {
  const [registeredUser, setRegisteredUser] = useState(null);
  const [loggedInUser, setLoggedInUser] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <AuthContext.Provider value={{ registeredUser, setRegisteredUser, loggedInUser, setLoggedInUser, isRegistering, setIsRegistering }}>
      <div style={styles.container}>
        {/* Goobooyin qurxin ah oo background-ka u yeelaya iftiin (Glow Effects) */}
        <div style={styles.glowLeft}></div>
        <div style={styles.glowRight}></div>
        
        <LoginCard />
      </div>
    </AuthContext.Provider>
  );
}

function LoginCard() {
  const { registeredUser, setRegisteredUser, loggedInUser, setLoggedInUser, isRegistering, setIsRegistering } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const usernameInputRef = useRef(null);

  useEffect(() => {
    if (usernameInputRef.current) {
      usernameInputRef.current.focus();
    }
  }, [isRegistering]);

  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password) {
      setRegisteredUser({ username, password });
      setMessage('🎉 Waad ku guulaysatay inaad is diiwaan geliso! Fadlan hadda gasho.');
      setIsRegistering(false);
      setUsername('');
      setPassword('');
    } else {
      setMessage('⚠️ Fadlan buuxi meelaha banaan.');
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!registeredUser) {
      setMessage('🛑 Ma jiro isticmaale diiwaan gashan. Is diiwaan geli marka hore.');
      return;
    }

    if (username === registeredUser.username && password === registeredUser.password) {
      setLoggedInUser(username);
      setMessage('');
    } else {
      setMessage('❌ Username ama Password waa khaldan yihiin!');
    }
  };

  return (
    <div style={styles.card}>
      <h2 style={styles.title}>
        {isRegistering ? 'Diiwaan-gelin (Register)' : 'Gali Nidaamka (Login)'}
      </h2>
      
      <form onSubmit={isRegistering ? handleRegister : handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Username:</label>
          <input 
            ref={usernameInputRef} 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Geli magacaaga" 
            style={styles.input} 
            required
          />
        </div>

        <div style={styles.inputGroup}>
          <label style={styles.label}>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Geli password-ka" 
            style={styles.input} 
            required
          />
        </div>

        <button type="submit" style={styles.button}>
          {isRegistering ? 'Abuur Akoon Cusub' : 'Gasho Nidaamka'}
        </button>
      </form>

      {message && (
        <p style={{
          ...styles.message,
          color: message.includes('guulaysatay') ? '#4ade80' : '#f87171',
          backgroundColor: message.includes('guulaysatay') ? 'rgba(74, 222, 128, 0.1)' : 'rgba(248, 113, 113, 0.1)',
          border: message.includes('guulaysatay') ? '1px solid rgba(74, 222, 128, 0.2)' : '1px solid rgba(248, 113, 113, 0.2)'
        }}>
          {message}
        </p>
      )}

      {loggedInUser && (
        <div style={styles.successBox}>
          <h3 style={{ margin: '0 0 5px 0', fontSize: '15px' }}>🎉 Successful Login!</h3>
          <p style={{ margin: 0, fontSize: '13px', color: '#94a3b8' }}>
            Ku soo dhawaada nidaamka: <strong style={{ color: '#4ade80' }}>{loggedInUser}</strong>
          </p>
        </div>
      )}

      {/* Line Divider */}
      <div style={styles.dividerContainer}>
        <div style={styles.dividerLine}></div>
        <span style={styles.dividerText}>Ama</span>
        <div style={styles.dividerLine}></div>
      </div>
      
      <button 
        onClick={() => {
          setIsRegistering(!isRegistering);
          setMessage('');
          setLoggedInUser('');
          setUsername('');
          setPassword('');
        }} 
        style={styles.switchButton}
        onMouseOver={(e) => e.target.style.color = '#818cf8'}
        onMouseOut={(e) => e.target.style.color = '#94a3b8'}
      >
        {isRegistering ? 'Ma haysataa Akoon? Gasho (Login)' : 'Ma haysatid Akoon? Is diiwaan geli'}
      </button>
    </div>
  );
}

// ==========================================
// FIX: Meeshan waxaa laga saaray wixii horizontal scroll keenayay
// ==========================================
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',             // FIX: Waxaa loo beddelay 100% si uusan scroll u keenin
    maxWidth: '100%',          // FIX: Waxay xannibaysaa inuu page-ku labada dhinac u nuuxsado
    backgroundColor: '#0f172a', 
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    position: 'relative',
    overflow: 'hidden'         // FIX: Wixii bannaanka u baxa si toos ah ayay u qubaysaa (No Scrollbars)
  },
  glowLeft: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: '300px',
    height: '300px',
    background: 'rgba(99, 102, 241, 0.15)', 
    borderRadius: '50%',
    filter: 'blur(80px)',
    pointerEvents: 'none'
  },
  glowRight: {
    position: 'absolute',
    bottom: '20%',
    right: '10%',
    width: '300px',
    height: '300px',
    background: 'rgba(168, 85, 247, 0.12)', 
    borderRadius: '50%',
    filter: 'blur(80px)',
    pointerEvents: 'none'
  },
  card: {
    backgroundColor: 'rgba(30, 41, 59, 0.7)', 
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    padding: '40px 35px',
    borderRadius: '24px',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
    width: '100%',             // FIX: Responsive ka dhigaya mobile-ka
    maxWidth: '380px',         // FIX: Desktop-ka wuxuu ku istaagayaa cabbirka ugu habboon (380px)
    boxSizing: 'border-box',   // FIX: Padding-ka kuma darayo cabbirka guud ee Card-ka
    zIndex: 10
  },
  title: {
    margin: '0 0 30px 0',
    fontSize: '26px',
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: '-0.5px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    gap: '6px'
  },
  label: {
    fontSize: '12px',
    fontWeight: '6px',
    color: '#94a3b8', 
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    paddingLeft: '2px'
  },
  input: {
    padding: '14px',
    borderRadius: '12px',
    border: '1px solid #334155',
    backgroundColor: '#0f172a',
    color: '#f8fafc',
    fontSize: '15px',
    outline: 'none',
    boxSizing: 'border-box',   // FIX: Waxay ilaalisaa in input-ku dhaafo Card-ka dhexdiisa
    width: '100%'
  },
  button: {
    padding: '14px',
    background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', 
    color: '#fff',
    border: 'none',
    borderRadius: '12px',
    cursor: 'pointer',
    fontSize: '15px',
    fontWeight: '700',
    boxShadow: '0 10px 20px rgba(79, 70, 229, 0.25)',
    transition: 'transform 0.1s ease, opacity 0.2s ease',
    marginTop: '10px'
  },
  message: {
    padding: '12px',
    borderRadius: '12px',
    fontSize: '13px',
    marginTop: '20px',
    margin: '20px 0 0 0',
    lineHeight: '1.5'
  },
  successBox: {
    marginTop: '20px',
    padding: '15px',
    backgroundColor: 'rgba(16, 185, 129, 0.1)',
    color: '#34d399',
    borderRadius: '12px',
    border: '1px solid rgba(16, 185, 129, 0.2)',
    textAlign: 'center'
  },
  dividerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '25px 0'
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: 'rgba(51, 65, 85, 0.5)'
  },
  dividerText: {
    padding: '0 15px',
    color: '#64748b',
    fontSize: '12px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  switchButton: {
    background: 'none',
    border: 'none',
    color: '#94a3b8',
    cursor: 'pointer',
    fontSize: '13px',
    fontWeight: '600',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
    transition: 'color 0.2s ease'
  }
};