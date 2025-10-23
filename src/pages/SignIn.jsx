import { useState } from 'react';
import { Eye, EyeOff, ArrowLeft, Code, Palette, BarChart, Megaphone, Users, Wrench } from 'lucide-react';
import HiveXLogo from '../assets/hivexlogo.svg';

const SignIn = ({ onSignIn }) => {
  const [currentScreen, setCurrentScreen] = useState('landing');
  const [selectedRole, setSelectedRole] = useState(null);
  const [hoveredRole, setHoveredRole] = useState(null);
  const [selectedTools, setSelectedTools] = useState([]);
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    jobTitle: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const roles = [
    {
      id: 'developer',
      name: 'Developer',
      icon: Code,
      description: 'Build and maintain software applications, write code, and solve technical challenges',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      id: 'designer',
      name: 'Designer',
      icon: Palette,
      description: 'Create beautiful user interfaces, design experiences, and craft visual identities',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      id: 'analyst',
      name: 'Sales',
      icon: BarChart,
      description: 'Analyze data patterns, generate insights, and drive data-driven decisions',
      gradient: 'from-green-500 to-green-600'
    },
    {
      id: 'marketer',
      name: 'HR',
      icon: Megaphone,
      description: 'Develop marketing strategies, manage campaigns, and grow brand presence',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      id: 'manager',
      name: 'VP',
      icon: Users,
      description: 'Lead product strategy, coordinate teams, and deliver value to customers',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'operations',
      name: 'Founder',
      icon: Wrench,
      description: 'Optimize processes, manage workflows, and ensure smooth operations',
      gradient: 'from-orange-500 to-orange-600'
    },
    {
      id: 'operations',
      name: 'Other',
      icon: Wrench,
      description: 'Optimize processes, manage workflows, and ensure smooth operations',
      gradient: 'from-orange-500 to-orange-600'
    }
  ];

   const tools = [
    { id: 'outlook', name: 'Outlook', icon: '📧', color: 'bg-blue-50 border-blue-200' },
    { id: 'notion', name: 'Notion', icon: '📝', color: 'bg-gray-50 border-gray-200' },
    { id: 'slack', name: 'Slack', icon: '💬', color: 'bg-purple-50 border-purple-200' },
    { id: 'google-workspace', name: 'Google Workspace', icon: '🔍', color: 'bg-red-50 border-red-200' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateSignUpForm = () => {
    const newErrors = {};
    
    if (!formData.fullName) {
      newErrors.fullName = 'Full name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.jobTitle) {
      newErrors.jobTitle = 'Job title is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

   const validateSignInForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

   const handleSignUpSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateSignUpForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

     setCurrentScreen('tools');
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateSignInForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (onSignIn) {
      onSignIn(formData.email, formData.password);
    }
  };

  const toggleTool = (toolId) => {
    setSelectedTools(prev => 
      prev.includes(toolId) 
        ? prev.filter(id => id !== toolId)
        : [...prev, toolId]
    );
  };

  const LeftIllustration = () => (
    <div className="w-full h-screen overflow-hidden">
      <img
      src="src/assets/signinleft.svg"
      alt="Illustration"
      className="w-full h-screen"
    />
    </div>
  );

  // Landing Screen
  if (currentScreen === 'landing') {
    return (
      <div className="h-screen flex overflow-hidden">
        <LeftIllustration />
        
        <div className="w-full flex items-center justify-center p-9 bg-white">
          <div className="w-full max-w-md text-center">
            <div className="mb-16">
            </div>

            <div className="mb-17">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Personalise your <span className="inline-block"><img 
                   src={HiveXLogo} 
                   alt="HiveX Logo" 
                  className="h-20 w-35 mt-5" /></span>
              </h2>
              <p className="text-lg text-gray-600 mt-6">
                Automate your repetitive tasks
              </p>
            </div>

            <button
              onClick={() => setCurrentScreen('onboarding')}
              className="w-full max-w-xs mx-auto bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-900 text-white font-bold py-4 px-8 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    );
  }

   // Onboarding Screen
  if (currentScreen === 'onboarding') {
    return (
      <div className="w-full h-screen flex overflow-hidden">
        <LeftIllustration />
        
        <div className="w-full h-screen flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-2xl">
            <button
              onClick={() => setCurrentScreen('landing')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back</span>
            </button>

            <div className="mb-8"></div>

            <div className="mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-2 flex justify-center">
                Choose your role for <span className="inline-block"><img 
                  src={HiveXLogo} 
                  alt="HiveX Logo" 
                  className="h-12 w-30" 
                /></span>
              </h2>
              <p className="text-gray-600 flex justify-center">
                We'll use this information to customize your workspace set-up
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              {roles.map((role) => {
                const Icon = role.icon;
                const isSelected = selectedRole === role.id;
                const isHovered = hoveredRole === role.id;
                
                return (
                  <button
                    key={role.id}
                    onClick={() => setSelectedRole(role.id)}
                    onMouseEnter={() => setHoveredRole(role.id)}
                    onMouseLeave={() => setHoveredRole(null)}
                    className={`relative group p-6 rounded-xl border-2 transition-all duration-300 text-left overflow-hidden ${
                      isSelected
                        ? 'border-purple-500 bg-purple-50 shadow-lg scale-105'
                        : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-md'
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${role.gradient} mb-4 transition-transform duration-300 ${
                      isSelected ? 'scale-110' : 'group-hover:scale-110'
                    }`}>
                      <Icon className="text-white" size={24} />
                    </div>

                    <h3 className={`text-xl font-bold mb-2 transition-colors ${
                      isSelected ? 'text-purple-700' : 'text-gray-900'
                    }`}>
                      {role.name}
                    </h3>

                    <div className={`transition-all duration-300 ${
                      isHovered || isSelected
                        ? 'opacity-100 max-h-20 translate-y-0'
                        : 'opacity-0 max-h-0 -translate-y-2'
                    }`}>
                      <p className="text-sm text-gray-600">
                        {role.description}
                      </p>
                    </div>

                    {isSelected && (
                      <div className="absolute top-4 right-4">
                        <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentScreen('signup')}
              disabled={!selectedRole}
              className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-200 ${
                selectedRole
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white shadow-lg hover:shadow-xl transform hover:scale-105'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {selectedRole ? 'Continue' : 'Select a role to continue'}
            </button>

            <p className="mt-4 text-center text-sm text-gray-600">
              Not sure yet?{' '}
              <button
                onClick={() => setCurrentScreen('signup')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Skip for now
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Sign Up Screen
  if (currentScreen === 'signup') {
    return (
      <div className="w-full h-screen flex overflow-hidden">
        <LeftIllustration />
        
        <div className="w-full h-screen flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-2xl">
            <button
              onClick={() => setCurrentScreen('onboarding')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back</span>
            </button>

            <div className="mb-5">
              <img 
                src={HiveXLogo} 
                alt="HiveX Logo" 
                className="h-12 w-20"
              />
            </div>

            <div className="mb-2">
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                Let's level up your brand, together
              </h2>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur. Non ut nisl at rutrum ipsum.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder=" "
                  className={`w-full px-4 py-3 border ${
                    errors.fullName ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Work email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder=" "
                  className={`w-full px-4 py-3 border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Title
                </label>
                <select
                  id="jobTitle"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border ${
                    errors.jobTitle ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent appearance-none bg-white`}
                >
                  <option value="">Designer</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="sales">Sales</option>
                  <option value="hr">HR</option>
                  <option value="vp">VP</option>
                  <option value="founder">Founder</option>
                  <option value="other">Other</option>
                </select>
                {errors.jobTitle && (
                  <p className="mt-1 text-sm text-red-500">{errors.jobTitle}</p>
                )}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder=""
                    className={`w-full px-4 py-3 border ${
                      errors.password ? 'border-red-500' : 'border-gray-300'
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                {errors.password && (
                  <p className="mt-1 text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              <button
                type="button"
                onClick={handleSignUpSubmit}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Sign Up
              </button>
            </div>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-gray-500">Or</span>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setCurrentScreen('tools')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span className="font-medium text-gray-700">Sign up with google</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentScreen('tools')}
                className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 23 23">
                  <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                  <path fill="#f35325" d="M1 1h10v10H1z"/>
                  <path fill="#81bc06" d="M12 1h10v10H12z"/>
                  <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                  <path fill="#ffba08" d="M12 12h10v10H12z"/>
                </svg>
                <span className="font-medium text-gray-700">Sign up with Microsoft</span>
              </button>
            </div>

            <p className="mt-6 text-center text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => setCurrentScreen('signin')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    );
  }

   // Tool Selection Screen
  if (currentScreen === 'tools') {
    return (
      <div className="w-full max-h-screen flex">
        <LeftIllustration />
        
        <div className="w-full h-screen flex items-center justify-center p-8 bg-white">
          <div className="w-full max-w-3xl max-h-screen overflow-y-auto">
            <button
              onClick={() => setCurrentScreen('signup')}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-20 transition-colors"
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back</span>
            </button>

            <div className="mb-12 text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">
                Select the tools to connect with 
                <img 
                  src={HiveXLogo} 
                  alt="HiveX Logo" 
                  className="h-15 w-30 inline-block"
                />
              </h2>
              <p className="text-gray-600">
                The Choice wont limit your experience
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {tools.map((tool) => (
                <button
                  key={tool.id}
                  onClick={() => toggleTool(tool.id)}
                  className={`flex items-center justify-center gap-3 px-6 py-4 border-2 rounded-xl transition-all duration-200 ${
                    selectedTools.includes(tool.id)
                      ? 'border-purple-500 bg-purple-50 shadow-md'
                      : 'border-gray-300 bg-white hover:border-gray-400'
                  }`}
                >
                  <span className="text-2xl">{tool.icon}</span>
                  <span className="font-medium text-gray-900">{tool.name}</span>
                </button>
              ))}
            </div>

            <div className="flex flex-col gap-4">
              <button
                onClick={() => setCurrentScreen('signup')}
                className="flex-1 py-4 px-6 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-50 transition-all duration-200"
              >
                Back
              </button>
              <button
                onClick={() => {
                  setCurrentScreen('signin');
                  onSignIn(formData.email, formData.password);
                }}
                className="flex-1 py-4 px-6 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Sign In Screen
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <LeftIllustration />
      
      <div className="w-full h-screen flex overflow-hidden items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <button
            onClick={() => setCurrentScreen('onboarding')}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          <div className="mb-8">
            <h1 className="text-4xl font-bold">
              Hive<span className="text-purple-600">X</span>
            </h1>
          </div>

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Let's level up your brand, together
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur. Non ut nisl at rutrum ipsum.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Work email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className={`w-full px-4 py-3 border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={`w-full px-4 py-3 border ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-500">{errors.password}</p>
              )}
            </div>

            <button
              type="button"
              onClick={handleSignInSubmit}
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </div>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => onSignIn && onSignIn('google@user.com', 'google-auth')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span className="font-medium text-gray-700">Sign in with Google</span>
            </button>

            <button
              type="button"
              onClick={() => onSignIn && onSignIn('microsoft@user.com', 'microsoft-auth')}
              className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <svg className="w-5 h-5" viewBox="0 0 23 23">
                <path fill="#f3f3f3" d="M0 0h23v23H0z"/>
                <path fill="#f35325" d="M1 1h10v10H1z"/>
                <path fill="#81bc06" d="M12 1h10v10H12z"/>
                <path fill="#05a6f0" d="M1 12h10v10H1z"/>
                <path fill="#ffba08" d="M12 12h10v10H12z"/>
              </svg>
              <span className="font-medium text-gray-700">Sign in with Microsoft</span>
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <a href="#" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;