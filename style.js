@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap');
@import url('https://cdn.tailwindcss.com');

body {
    font-family: 'Inter', sans-serif;
    background-color: #f3f4f6;
    overflow-x: hidden;
    -webkit-tap-highlight-color: transparent;
}

/* --- Transitions --- */
.fade-in {
    animation: fadeIn 0.4s ease-out forwards;
}

@keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}

/* --- Custom Styles --- */

/* Main Menu Buttons - Glassmorphism touch */
.menu-btn {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(255,255,255,0.2);
}
.menu-btn:active {
    transform: scale(0.98);
    box-shadow: 0 5px 10px -3px rgba(0, 0, 0, 0.1);
}

/* Free Tips Gradient */
.card-gradient-free {
    background: linear-gradient(135deg, #059669 0%, #10b981 50%, #ef4444 100%);
    border: 1px solid #fbbf24;
}

/* Over/Under Gradient */
.card-gradient-ou {
    background: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #8b5cf6 100%);
    border: 1px solid #c4b5fd;
}

/* Status Badges */
.badge-won {
    background-color: #22c55e;
    color: white;
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.4);
}
.badge-pending {
    background-color: #eab308;
    color: black;
}
.badge-lost {
    background-color: #ef4444;
    color: white;
}

/* Drawer */
#drawer {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.drawer-open { transform: translateX(0) !important; }
.drawer-closed { transform: translateX(-100%); }

/* Mobile Container */
.app-container {
    max-width: 480px;
    margin: 0 auto;
    min-height: 100vh;
    background-color: #ffffff;
    position: relative;
    box-shadow: 0 0 40px rgba(0,0,0,0.1);
}

/* VS Circle */
.vs-circle {
    width: 24px;
    height: 24px;
    background: rgba(255,255,255,0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 10px;
    font-weight: 800;
}
