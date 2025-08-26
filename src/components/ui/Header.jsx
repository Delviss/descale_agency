import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoUrl, setLogoUrl] = useState('');
  const [isUploadingLogo, setIsUploadingLogo] = useState(false);
  const fileInputRef = useRef(null);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services-hub', icon: 'Briefcase' },
    { name: 'Work', path: '/work-portfolio', icon: 'FolderOpen' },
    { name: 'Innovation Lab', path: '/interactive-taxi-ads-innovation-lab', icon: 'Lightbulb' },
    { name: 'About', path: '/about-experience', icon: 'Users' },
  ];

  const secondaryItems = [
    { name: 'Growth Assessment', path: '/growth-assessment-contact', icon: 'TrendingUp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location?.pathname]);

  // Load saved logo from localStorage on component mount
  useEffect(() => {
    const savedLogo = localStorage.getItem('descale-logo');
    if (savedLogo) {
      setLogoUrl(savedLogo);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const handleLogoUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file?.type?.startsWith('image/')) {
      alert('Please select a valid image file');
      return;
    }

    // Validate file size (max 2MB)
    if (file?.size > 2 * 1024 * 1024) {
      alert('Image size should be less than 2MB');
      return;
    }

    setIsUploadingLogo(true);

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e?.target?.result;
      setLogoUrl(imageUrl);
      localStorage.setItem('descale-logo', imageUrl);
      setIsUploadingLogo(false);
    };
    
    reader.onerror = () => {
      alert('Error reading file');
      setIsUploadingLogo(false);
    };

    reader?.readAsDataURL(file);
  };

  const handleLogoClick = () => {
    if (fileInputRef?.current) {
      fileInputRef?.current?.click();
    }
  };

  const removeLogo = () => {
    setLogoUrl('');
    localStorage.removeItem('descale-logo');
    if (fileInputRef?.current) {
      fileInputRef.current.value = '';
    }
  };

  const Logo = () => (
    <div className="flex items-center space-x-3 group relative">
      <div className="relative">
        {logoUrl ? (
          <div className="relative w-10 h-10 rounded-lg overflow-hidden shadow-brand cursor-pointer hover:scale-105 transition-transform duration-brand-fast">
            <img 
              src={logoUrl} 
              alt="Company Logo" 
              className="w-full h-full object-cover"
              onClick={handleLogoClick}
            />
            {isUploadingLogo && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              </div>
            )}
            <button
              onClick={(e) => {
                e?.stopPropagation();
                removeLogo();
              }}
              className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 hover:bg-red-600 rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-brand-fast flex items-center justify-center"
              title="Remove logo"
            >
              <Icon name="X" size={10} className="text-white" />
            </button>
          </div>
        ) : (
          <div className="relative">
            <div 
              className="w-10 h-10 bg-gradient-brand rounded-lg flex items-center justify-center shadow-brand cursor-pointer hover:scale-105 transition-transform duration-brand-fast"
              onClick={handleLogoClick}
              title="Click to upload logo"
            >
              {isUploadingLogo ? (
                <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
              ) : (
                <span className="text-white font-bold text-xl">D</span>
              )}
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white opacity-0 group-hover:opacity-100 transition-opacity duration-brand-fast flex items-center justify-center cursor-pointer"
              onClick={handleLogoClick}
              title="Upload logo"
            >
              <Icon name="Upload" size={8} className="text-white" />
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col">
        <span className="text-brand-headline text-xl font-extrabold text-primary tracking-tight">
          DESCALE
        </span>
        <span className="text-xs text-secondary font-medium tracking-wider">
          AGENCY
        </span>
      </div>
      
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleLogoUpload}
        className="hidden"
      />
    </div>
  );

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-fixed transition-all duration-brand-fast ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-brand shadow-brand-md border-b border-border' 
          : 'bg-transparent'
      } ${className}`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/homepage" className="block hover-lift">
              <Logo />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <a
                key={item?.path}
                href={item?.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-brand-fast hover-lift ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-text-primary hover:bg-muted hover:text-primary'
                }`}
              >
                {item?.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="sm"
              iconName="TrendingUp"
              iconPosition="left"
              onClick={() => window.location.href = '/growth-assessment-contact'}
              className="hover-brand"
            >
              Growth Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="hover-brand"
              aria-label="Toggle menu"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={24} 
                className="transition-transform duration-brand-fast"
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div 
          className={`lg:hidden transition-all duration-brand-normal overflow-hidden ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 border-t border-border' :'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-brand px-4 py-6 space-y-2">
            {navigationItems?.map((item) => (
              <a
                key={item?.path}
                href={item?.path}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-all duration-brand-fast ${
                  isActivePath(item?.path)
                    ? 'bg-primary text-primary-foreground shadow-brand'
                    : 'text-text-primary hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item?.icon} size={20} />
                <span>{item?.name}</span>
              </a>
            ))}
            
            <div className="pt-4 border-t border-border">
              {secondaryItems?.map((item) => (
                <a
                  key={item?.path}
                  href={item?.path}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium text-accent hover:bg-accent/10 transition-all duration-brand-fast"
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;