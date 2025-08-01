const header = document.querySelector(".header");

export function buildHeader(object) {
    const html = `<div class="container">
                <svg class="header__logo" width="109" height="28" viewBox="0 0 109 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_102_278)">
                    <path d="M0 2L12.2571 14.1286L24 26V2H0Z" fill="#F6F6F6"/>
                    <path d="M3.34285 5.17145L12.3 14.0429L20.7429 22.6572H3.34285V5.17145Z" fill="#F6F6F6"/>
                    <path d="M20.7997 22.7137L11.8425 13.8423L3.39967 5.22797H20.7997V22.7137Z" fill="#4F2EE8"/>
                    <path d="M6.94286 8.77142L11.7 13.5286L17.1429 18.9714H6.94286V8.77142Z" fill="#4F2EE8"/>
                    <path d="M6.94286 8.77142L11.7 13.5286L17.1429 18.9714V8.77142H6.94286Z" fill="#F6F6F6"/>
                    </g>
                    <path d="M41.702 10.733C41.702 8.663 40.172 7.49301 37.526 7.49301H32V20.363H37.832C40.496 20.363 42.206 19.085 42.206 16.601C42.206 14.675 41.054 13.685 39.704 13.451V13.415C40.766 13.055 41.702 12.317 41.702 10.733ZM34.142 12.821V9.31101H37.58C38.858 9.31101 39.56 9.941 39.56 11.075C39.56 12.209 38.984 12.821 37.454 12.821H34.142ZM34.142 14.423H37.904C39.254 14.423 40.064 15.161 40.064 16.475C40.064 17.681 39.506 18.545 37.67 18.545H34.142V14.423Z" fill="black"/>
                    <path d="M47.7018 20.633C44.8218 20.633 43.0758 18.635 43.0758 15.773C43.0758 12.911 44.8218 10.913 47.7018 10.913C50.5818 10.913 52.3278 12.911 52.3278 15.773C52.3278 18.635 50.5818 20.633 47.7018 20.633ZM47.7018 19.085C49.5018 19.085 50.4378 17.663 50.4378 15.773C50.4378 13.865 49.5018 12.461 47.7018 12.461C45.9018 12.461 44.9658 13.865 44.9658 15.773C44.9658 17.663 45.9018 19.085 47.7018 19.085Z" fill="black"/>
                    <path d="M57.774 20.633C54.894 20.633 53.148 18.635 53.148 15.773C53.148 12.911 54.894 10.913 57.774 10.913C60.654 10.913 62.4 12.911 62.4 15.773C62.4 18.635 60.654 20.633 57.774 20.633ZM57.774 19.085C59.574 19.085 60.51 17.663 60.51 15.773C60.51 13.865 59.574 12.461 57.774 12.461C55.974 12.461 55.038 13.865 55.038 15.773C55.038 17.663 55.974 19.085 57.774 19.085Z" fill="black"/>
                    <path d="M63.7063 7.49301V20.363H65.5963V17.033L66.8743 15.827L69.7723 20.363H72.0403L68.1703 14.585L71.6623 11.165H69.3403L65.5963 14.855V7.49301H63.7063Z" fill="black"/>
                    <path d="M76.5964 14.801C75.2644 14.495 74.2384 14.423 74.2384 13.487C74.2384 12.839 74.8504 12.407 75.9844 12.407C77.4604 12.407 77.8204 13.145 77.9464 13.865H79.7824C79.6564 12.263 78.4684 10.913 75.9664 10.913C73.6624 10.913 72.3304 12.119 72.3304 13.631C72.3304 15.719 74.3104 16.007 75.7684 16.349C77.1184 16.673 78.2164 16.763 78.2164 17.915C78.2164 18.491 77.6584 19.139 76.3444 19.139C74.4004 19.139 73.9684 18.293 73.8784 17.303H72.0424C72.1324 19.247 73.4104 20.633 76.3804 20.633C78.6124 20.633 80.1244 19.535 80.1244 17.771C80.1244 15.575 78.2884 15.197 76.5964 14.801Z" fill="black"/>
                    <path d="M86.3039 10.913C84.7559 10.913 83.8019 11.633 83.3159 12.353H83.2799V7.49301H81.3899V20.363H83.2799V14.765C83.2799 13.397 84.2699 12.515 85.6559 12.515C86.9699 12.515 87.4919 13.307 87.4919 14.549V20.363H89.3999V14.009C89.3999 11.903 88.0499 10.913 86.3039 10.913Z" fill="black"/>
                    <path d="M95.1962 19.085C93.5222 19.085 92.5322 17.807 92.5322 16.259H99.5882C99.5882 12.983 98.1302 10.913 95.1602 10.913C92.3882 10.913 90.6422 12.785 90.6422 15.773C90.6422 18.653 92.3882 20.633 95.2502 20.633C97.6082 20.633 98.9762 19.301 99.4442 17.555H97.5542C97.3922 18.113 96.7622 19.085 95.1962 19.085ZM95.1602 12.407C96.6902 12.407 97.6982 13.433 97.6982 14.855H92.5322C92.5322 13.433 93.6302 12.407 95.1602 12.407Z" fill="black"/>
                    <path d="M100.92 7.49301V20.363H102.828V7.49301H100.92Z" fill="black"/>
                    <path d="M109.001 9.04101V7.49301C108.623 7.421 108.209 7.367 107.741 7.367C106.229 7.367 105.401 8.05101 105.401 9.99501V11.165H104.087V12.713H105.401V20.363H107.309V12.713H109.001V11.165H107.309V10.157C107.309 9.11301 107.777 8.98701 109.001 9.04101Z" fill="black"/>
                    <defs>
                    <clipPath id="clip0_102_278">
                    <rect width="24" height="24" fill="white" transform="translate(0 2)"/>
                    </clipPath>
                    </defs>
                </svg>
            <ul class="header__nav-list">
                <li class="header__nav-item">
                    <a href="./index.html" class="header__nav-link">Home</a>
                </li>
                <li class="header__nav-item active-nav-item">
                    <a class="header__nav-link  active-nav-link" href="./basket.html">Shopping list</a>
                    <svg class="header__nav-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M15.8333 5.83335H13.3333V5.00002C13.3333 4.11596 12.9821 3.26812 12.357 2.643C11.7319 2.01788 10.884 1.66669 9.99999 1.66669C9.11594 1.66669 8.26809 2.01788 7.64297 2.643C7.01785 3.26812 6.66666 4.11596 6.66666 5.00002V5.83335H4.16666C3.94565 5.83335 3.73369 5.92115 3.57741 6.07743C3.42113 6.23371 3.33333 6.44567 3.33333 6.66669V15.8334C3.33333 16.4964 3.59672 17.1323 4.06556 17.6011C4.5344 18.07 5.17029 18.3334 5.83333 18.3334H14.1667C14.8297 18.3334 15.4656 18.07 15.9344 17.6011C16.4033 17.1323 16.6667 16.4964 16.6667 15.8334V6.66669C16.6667 6.44567 16.5789 6.23371 16.4226 6.07743C16.2663 5.92115 16.0543 5.83335 15.8333 5.83335ZM8.33333 5.00002C8.33333 4.55799 8.50892 4.13407 8.82148 3.82151C9.13404 3.50895 9.55796 3.33335 9.99999 3.33335C10.442 3.33335 10.8659 3.50895 11.1785 3.82151C11.4911 4.13407 11.6667 4.55799 11.6667 5.00002V5.83335H8.33333V5.00002ZM15 15.8334C15 16.0544 14.9122 16.2663 14.7559 16.4226C14.5996 16.5789 14.3877 16.6667 14.1667 16.6667H5.83333C5.61231 16.6667 5.40035 16.5789 5.24407 16.4226C5.08779 16.2663 4.99999 16.0544 4.99999 15.8334V7.50002H6.66666V8.33335C6.66666 8.55437 6.75446 8.76633 6.91074 8.92261C7.06702 9.07889 7.27898 9.16669 7.49999 9.16669C7.72101 9.16669 7.93297 9.07889 8.08925 8.92261C8.24553 8.76633 8.33333 8.55437 8.33333 8.33335V7.50002H11.6667V8.33335C11.6667 8.55437 11.7545 8.76633 11.9107 8.92261C12.067 9.07889 12.279 9.16669 12.5 9.16669C12.721 9.16669 12.933 9.07889 13.0892 8.92261C13.2455 8.76633 13.3333 8.55437 13.3333 8.33335V7.50002H15V15.8334Z" fill="#111111"/>
                    </svg>
                </li>
            </ul>
            <label class="header__switch">
                <input class="header__switch-input" type="checkbox">
                <span class="header__slider header__round"></span>
            </label>
            <button class="header__menu-button" type="button">
                <svg class="header__menu-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M19.8333 11.6667H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 7H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M24.5 16.3333H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M19.8333 21H3.5" stroke="#111111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <button class="phone__close-button" type="button">   
                <svg class="phone__close-icon" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M21 7L7 21M7 7L21 21" stroke="#111111" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </button>
            <div class="header__account-div">
                <div class="header__account-avatar-div">
                    <svg class="header__account-avatar" xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
                        <path d="M3.16663 17.4166C3.16663 15.7369 3.83389 14.126 5.02162 12.9383C6.20935 11.7506 7.82025 11.0833 9.49996 11.0833C11.1797 11.0833 12.7906 11.7506 13.9783 12.9383C15.166 14.126 15.8333 15.7369 15.8333 17.4166H3.16663ZM9.49996 10.2916C6.87558 10.2916 4.74996 8.166 4.74996 5.54163C4.74996 2.91725 6.87558 0.791626 9.49996 0.791626C12.1243 0.791626 14.25 2.91725 14.25 5.54163C14.25 8.166 12.1243 10.2916 9.49996 10.2916Z" fill="#4F2EE8"/>
                    </svg>
                </div>
                <span class="header__account-name">${object.name}</span>
                <button type="button" class="header__account-button">
                    <svg class="header__account-icon" xmlns="http://www.w3.org/2000/svg" width="23" height="26" viewBox="0 0 23 26" fill="none">
                        <path d="M4.79175 9.75H18.2084L12.1776 16.5674C11.9979 16.7705 11.7542 16.8846 11.5001 16.8846C11.246 16.8846 11.0023 16.7705 10.8225 16.5674L4.79175 9.75Z" fill="white"/>
                    </svg>
                </button>
                <button class="header__exit-button is-hidden" type="button">
                Log out
                <svg class="header__exit-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M3.33325 10H16.6666M16.6666 10L11.6666 5M16.6666 10L11.6666 15" stroke="#EAC645" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </button>
            </div>
        </div>`

    header.innerHTML = html;
};