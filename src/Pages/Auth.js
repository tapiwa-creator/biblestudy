import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, X } from 'lucide-react';

export default function AuthModal({ isOpen = true, onClose }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form States
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [registerData, setRegisterData] = useState({
    username: '',
    church: '',
    password: '',
    confirmPassword: '',
  });

  // Notification States
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  if (!isOpen) return null;

  // Dropdown options sorted alphabetically
  const churchOptions = ["Self-Study", "Bindura Main", "Chiwaridzo Main", "Shashi Church", "Sunnyside"];

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');
    // Handle login verification logic here
    console.log('Logging in with:', loginData);
    navigate('/dashboard');
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setError('');
    setSuccessMessage('');

    if (registerData.password !== registerData.confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    if (!registerData.church) {
      setError('Please select your church.');
      return;
    }

    // Handle registration endpoint dispatch logic here
    console.log('Registering user:', registerData);
    
    // 1. Set the success message to prompt login
    setSuccessMessage('Registration successful! Please log in to your new account.');
    
    // 2. Clear out registration details and pre-fill login username for user convenience
    setLoginData((prev) => ({ ...prev, username: registerData.username }));
    setRegisterData({ username: '', church: '', password: '', confirmPassword: '' });
    
    // 3. Switch back to the Login view
    setIsLogin(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-md transform overflow-hidden rounded-[24px] border border-white/10 bg-[#0f1d3a] p-6 text-white shadow-2xl transition-all duration-300 md:p-8">
        
        {/* Close Button */}
        {onClose && (
          <button 
            onClick={onClose}
            className="absolute right-5 top-5 text-vop-textMuted hover:text-[#e0aa53] transition-colors"
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        )}

        {/* Header */}
        <div className="mb-5 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
            Voice of <span className="text-[#e0aa53]">Prophecy</span>
          </h2>
          <p className="mt-1 font-sans text-xs sm:text-sm text-gray-400">
            {isLogin ? 'Please log in to continue your journey' : 'Create an account to begin your study'}
          </p>
        </div>

        {/* Global Error Banner */}
        {error && (
          <div className="mb-3 rounded-lg bg-red-500/20 border border-red-500/40 p-2 text-center text-sm text-red-400 font-sans">
            {error}
          </div>
        )}

        {/* Global Success Banner */}
        {successMessage && (
          <div className="mb-3 rounded-lg bg-emerald-500/20 border border-emerald-500/40 p-2 text-center text-sm text-emerald-400 font-sans font-medium">
            {successMessage}
          </div>
        )}

        {/* LOGIN FORM */}
        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4 font-sans">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#e0aa53] mb-1.5">
                Username
              </label>
              <input
                type="text"
                required
                placeholder="Enter username"
                className="w-full rounded-xl bg-[#1a2b4c] border border-transparent px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#e0aa53]"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#e0aa53] mb-1.5">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-[#1a2b4c] border border-transparent px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#e0aa53] pr-12"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-400 hover:text-[#e0aa53] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full rounded-xl bg-[#e0aa53] py-2.5 text-sm font-bold text-[#0f1d3a] transition-all hover:bg-[#cb9643] hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#e0aa53]/10"
            >
              Log In
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => { setIsLogin(false); setError(''); setSuccessMessage(''); }}
                className="font-semibold text-[#e0aa53] hover:underline"
              >
                Register here
              </button>
            </p>
          </form>
        ) : (
          /* REGISTRATION FORM */
          <form onSubmit={handleRegisterSubmit} className="space-y-3 font-sans">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#e0aa53] mb-1">
                Username
              </label>
              <input
                type="text"
                required
                placeholder="John Doe"
                className="w-full rounded-xl bg-[#1a2b4c] border border-transparent px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#e0aa53]"
                value={registerData.username}
                onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
              />
              <span className="text-[11px] text-gray-400 mt-0.5 block">Enter your real name and surname</span>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#e0aa53] mb-1">
                Church
              </label>
              <select
                required
                className="w-full rounded-xl bg-[#1a2b4c] border border-transparent px-4 py-2.5 text-white outline-none transition-all focus:border-[#e0aa53] appearance-none cursor-pointer"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%23e0aa53'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, backgroundPosition: 'right 16px center', backgroundSize: '16px', backgroundRepeat: 'no-repeat' }}
                value={registerData.church}
                onChange={(e) => setRegisterData({ ...registerData, church: e.target.value })}
              >
                <option value="" disabled hidden>Select Affiliated Church</option>
                {churchOptions.map((church) => (
                  <option key={church} value={church} className="bg-[#0f1d3a]">{church}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#e0aa53] mb-1">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-[#1a2b4c] border border-transparent px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#e0aa53] pr-12"
                  value={registerData.password}
                  onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 text-gray-400 hover:text-[#e0aa53] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#e0aa53] mb-1">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  className="w-full rounded-xl bg-[#1a2b4c] border border-transparent px-4 py-2.5 text-white placeholder-gray-500 outline-none transition-all focus:border-[#e0aa53] pr-12"
                  value={registerData.confirmPassword}
                  onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 text-gray-400 hover:text-[#e0aa53] transition-colors"
                >
                  {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="mt-3 w-full rounded-xl bg-[#e0aa53] py-2.5 text-sm font-bold text-[#0f1d3a] transition-all hover:bg-[#cb9643] hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#e0aa53]/10"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-400 mt-4">
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => { setIsLogin(true); setError(''); setSuccessMessage(''); }}
                className="font-semibold text-[#e0aa53] hover:underline"
              >
                Log in here
              </button>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}