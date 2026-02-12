import { useState, useEffect } from 'react';
import {
    FaWhatsapp,
    FaFacebookF,
    FaInstagram,
    FaTiktok,
    FaYoutube,
    FaTripadvisor,
    FaTelegram,
} from 'react-icons/fa';
import { MdClose } from 'react-icons/md';
import {
    Mail, Phone
} from "lucide-react";

const SideContactBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Check if mobile view
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Entrance animation
    useEffect(() => {
        setTimeout(() => setIsVisible(true), 500);
    }, []);

    // Prevent body scroll when panel is open on mobile
    useEffect(() => {
        if (isMobile && isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobile, isOpen]);

    const contactButton = {
        icon: <Phone size={isMobile ? 24 : 28} />,
        color: '#1588ff',
        label: 'Contact Us'
    };

    const socialLinks = [
        {
            id: 'whatsapp',
            icon: <FaWhatsapp size={isMobile ? 20 : 22} />,
            href: 'https://wa.me/94764310628',
            color: '#25D366',
            label: 'WhatsApp',
            value: '+94 76 431 0628'
        },
        {
            id: 'email',
            icon: <Mail size={isMobile ? 20 : 22} />,
            href: 'mailto:ceylonvisittours@gmail.com',
            color: '#EA4335',
            label: 'Email',
            value: 'ceylonvisittours@gmail.com'
        },
        {
            id: 'facebook',
            icon: <FaFacebookF size={isMobile ? 20 : 22} />,
            href: 'https://www.facebook.com/share/1C8r22fs8y/',
            color: '#1877F2',
            label: 'Facebook',
            value: '@ceylonvisittours'
        },
        {
            id: 'instagram',
            icon: <FaInstagram size={isMobile ? 20 : 22} />,
            href: 'https://www.instagram.com/ceylonvisittourssrilanka',
            color: '#E4405F',
            label: 'Instagram',
            value: '@ceylonvisittours'
        },
        {
            id: 'tiktok',
            icon: <FaTiktok size={isMobile ? 20 : 22} />,
            href: 'https://www.tiktok.com/@ceylonvisittours',
            color: '#000000',
            label: 'TikTok',
            value: '@ceylonvisittours'
        },
        {
            id: 'youtube',
            icon: <FaYoutube size={isMobile ? 20 : 22} />,
            href: 'https://youtube.com/@ceylonvisittours',
            color: '#FF0000',
            label: 'YouTube',
            value: '@ceylonvisittours'
        },
        {
            id: 'tripadvisor',
            icon: <FaTripadvisor size={isMobile ? 20 : 22} />,
            href: 'https://www.tripadvisor.co.uk/Attraction_Review-g297896-d27698089',
            color: '#00AF87',
            label: 'TripAdvisor',
            value: 'Ceylon Visit Tours'
        },
        {
            id: 'telegram',
            icon: <FaTelegram size={isMobile ? 20 : 22} />,
            href: 'https://t.me/ceylonvisittourssrilanka',
            color: '#26A5E4',
            label: 'Telegram',
            value: '@ceylonvisittours'
        }
    ];

    // Mobile version - Bottom floating button with bottom sheet
    if (isMobile) {
        return (
            <>
                {/* Mobile Contact Button */}
                <div style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    zIndex: 9999,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '56px',
                            height: '56px',
                            borderRadius: '50%',
                            background: `linear-gradient(145deg, ${contactButton.color}, #0e6bb3)`,
                            color: 'white',
                            border: 'none',
                            boxShadow: isOpen
                                ? `0 15px 30px ${contactButton.color}80`
                                : `0 8px 20px ${contactButton.color}60`,
                            transform: isOpen ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
                            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            cursor: 'pointer',
                            position: 'relative'
                        }}
                    >
                        {isOpen ? <MdClose size={24} /> : contactButton.icon}

                        {/* Notification dot */}
                        <span style={{
                            position: 'absolute',
                            top: '-2px',
                            right: '-2px',
                            width: '12px',
                            height: '12px',
                            borderRadius: '50%',
                            backgroundColor: '#ff4444',
                            border: '2px solid white',
                            animation: 'ping 1.5s infinite'
                        }} />
                    </button>
                </div>

                {/* Mobile Bottom Sheet Panel */}
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            style={{
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                background: 'rgba(0,0,0,0.7)',
                                backdropFilter: 'blur(4px)',
                                zIndex: 9998,
                                animation: 'fadeIn 0.3s ease'
                            }}
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Bottom Sheet */}
                        <div style={{
                            position: 'fixed',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            background: 'white',
                            borderTopLeftRadius: '24px',
                            borderTopRightRadius: '24px',
                            boxShadow: '0 -5px 25px rgba(0,0,0,0.15)',
                            padding: '24px 20px',
                            zIndex: 9999,
                            maxHeight: '80vh',
                            overflowY: 'auto',
                            animation: 'slideUp 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}>
                            {/* Drag Handle */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                marginBottom: '20px'
                            }}>
                                <div style={{
                                    width: '40px',
                                    height: '4px',
                                    background: '#e0e0e0',
                                    borderRadius: '2px'
                                }} />
                            </div>

                            {/* Header */}
                            <div style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                marginBottom: '20px'
                            }}>
                                <div>
                                    <h3 style={{
                                        fontSize: '20px',
                                        fontWeight: '700',
                                        color: '#1f2937',
                                        margin: 0
                                    }}>
                                        Connect With Us
                                    </h3>
                                    <p style={{
                                        fontSize: '12px',
                                        color: '#6b7280',
                                        margin: '4px 0 0 0'
                                    }}>
                                        Available 24/7 • Instant Response
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    style={{
                                        width: '36px',
                                        height: '36px',
                                        borderRadius: '50%',
                                        background: '#f3f4f6',
                                        border: 'none',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: '#4b5563'
                                    }}
                                >
                                    <MdClose size={20} />
                                </button>
                            </div>

                            {/* Social Media Grid - Mobile */}
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(4, 1fr)',
                                gap: '12px',
                                marginBottom: '20px'
                            }}>
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            padding: '12px 4px',
                                            background: '#f9fafb',
                                            borderRadius: '12px',
                                            textDecoration: 'none',
                                            transition: 'all 0.2s ease',
                                            animation: `fadeInUp 0.5s ease ${index * 0.03}s both`
                                        }}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <div style={{
                                            color: link.color,
                                            fontSize: '22px',
                                            marginBottom: '6px'
                                        }}>
                                            {link.icon}
                                        </div>
                                        <span style={{
                                            fontSize: '10px',
                                            fontWeight: '600',
                                            color: '#4b5563'
                                        }}>
                                            {link.label}
                                        </span>
                                    </a>
                                ))}
                            </div>

                            {/* Footer */}
                            <div style={{
                                paddingTop: '16px',
                                borderTop: '1px solid #f0f0f0',
                                textAlign: 'center'
                            }}>
                                <p style={{
                                    fontSize: '11px',
                                    color: '#9ca3af',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '6px'
                                }}>
                                    <span style={{
                                        width: '6px',
                                        height: '6px',
                                        borderRadius: '50%',
                                        backgroundColor: '#10b981',
                                        animation: 'ping 1.5s infinite'
                                    }} />
                                    We typically respond within 1 hour
                                </p>
                            </div>
                        </div>
                    </>
                )}
            </>
        );
    }

    // Desktop version - Original sidebar
    return (
        <>
            <div style={{
                position: 'fixed',
                right: '30px',
                top: '50%',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '15px',
                zIndex: 9999
            }}>
                {/* Contact Button */}
                <div style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                }}>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '60px',
                            height: '60px',
                            borderRadius: '50%',
                            background: `linear-gradient(145deg, ${contactButton.color}, #0e6bb3)`,
                            color: 'white',
                            border: 'none',
                            boxShadow: isOpen
                                ? `0 15px 30px ${contactButton.color}80`
                                : `0 8px 20px ${contactButton.color}60`,
                            transform: isOpen ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0)',
                            transition: 'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            cursor: 'pointer',
                            position: 'relative',
                            animation: isVisible && !isOpen ? 'pulse 2s infinite' : 'none'
                        }}
                    >
                        {isOpen ? <MdClose size={28} /> : contactButton.icon}

                        {!isOpen && (
                            <span style={{
                                position: 'absolute',
                                top: '-2px',
                                right: '-2px',
                                width: '14px',
                                height: '14px',
                                borderRadius: '50%',
                                backgroundColor: '#ff4444',
                                border: '2px solid white',
                                animation: 'ping 1.5s infinite'
                            }} />
                        )}
                    </button>

                    {!isOpen && (
                        <span style={{
                            position: 'absolute',
                            right: '75px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'white',
                            padding: '6px 16px',
                            borderRadius: '20px',
                            fontSize: '14px',
                            fontWeight: '600',
                            color: contactButton.color,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            whiteSpace: 'nowrap',
                            border: `2px solid ${contactButton.color}`,
                            opacity: 1,
                            transition: 'opacity 0.3s ease',
                            pointerEvents: 'none'
                        }}>
                            Contact Us
                        </span>
                    )}
                </div>

                {/* Desktop Panel */}
                {isOpen && (
                    <div style={{
                        background: 'white',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                        padding: '24px',
                        width: '320px',
                        maxHeight: '80vh',
                        overflowY: 'auto',
                        animation: 'slideIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}>
                        {/* Header */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginBottom: '20px',
                            paddingBottom: '16px',
                            borderBottom: '2px solid #f0f0f0'
                        }}>
                            <div>
                                <h3 style={{
                                    fontSize: '20px',
                                    fontWeight: '700',
                                    color: '#1f2937',
                                    margin: 0
                                }}>
                                    Connect With Us
                                </h3>
                                <p style={{
                                    fontSize: '13px',
                                    color: '#6b7280',
                                    margin: '4px 0 0 0'
                                }}>
                                    Available 24/7 • Instant Response
                                </p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    width: '36px',
                                    height: '36px',
                                    borderRadius: '50%',
                                    background: '#f3f4f6',
                                    border: 'none',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#4b5563',
                                    transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = '#e5e7eb';
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = '#f3f4f6';
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <MdClose size={20} />
                            </button>
                        </div>

                        {/* Desktop Grid - 3 columns */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(3, 1fr)',
                            gap: '12px'
                        }}>
                            {socialLinks.map((link, index) => (
                                <a
                                    key={link.id}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: '16px 8px',
                                        background: '#f9fafb',
                                        borderRadius: '16px',
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease',
                                        animation: `fadeInUp 0.5s ease ${index * 0.05}s both`,
                                        border: '1px solid transparent'
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = link.color;
                                        e.currentTarget.style.transform = 'translateY(-5px)';
                                        e.currentTarget.style.boxShadow = `0 10px 20px ${link.color}40`;
                                        const icon = e.currentTarget.querySelector('.social-icon');
                                        if (icon) (icon as HTMLElement).style.color = 'white';
                                        const label = e.currentTarget.querySelector('.social-label');
                                        if (label) (label as HTMLElement).style.color = 'white';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = '#f9fafb';
                                        e.currentTarget.style.transform = 'translateY(0)';
                                        e.currentTarget.style.boxShadow = 'none';
                                        const icon = e.currentTarget.querySelector('.social-icon');
                                        if (icon) (icon as HTMLElement).style.color = link.color;
                                        const label = e.currentTarget.querySelector('.social-label');
                                        if (label) (label as HTMLElement).style.color = '#4b5563';
                                    }}
                                >
                                    <div className="social-icon" style={{
                                        color: link.color,
                                        fontSize: '24px',
                                        marginBottom: '8px',
                                        transition: 'color 0.3s ease'
                                    }}>
                                        {link.icon}
                                    </div>
                                    <span className="social-label" style={{
                                        fontSize: '11px',
                                        fontWeight: '600',
                                        color: '#4b5563',
                                        transition: 'color 0.3s ease'
                                    }}>
                                        {link.label}
                                    </span>
                                </a>
                            ))}
                        </div>

                        {/* Footer */}
                        <div style={{
                            marginTop: '20px',
                            paddingTop: '16px',
                            borderTop: '1px solid #f0f0f0',
                            textAlign: 'center'
                        }}>
                            <p style={{
                                fontSize: '12px',
                                color: '#9ca3af',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                            }}>
                                <span style={{
                                    width: '8px',
                                    height: '8px',
                                    borderRadius: '50%',
                                    backgroundColor: '#10b981',
                                    animation: 'ping 1.5s infinite'
                                }} />
                                We typically respond within 1 hour
                            </p>
                        </div>
                    </div>
                )}
            </div>

            {/* Desktop Backdrop */}
            {isOpen && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(0,0,0,0.5)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 9998,
                        animation: 'fadeIn 0.3s ease'
                    }}
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};


export default SideContactBar;