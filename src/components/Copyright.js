import styles from '../css/_Sidebar.module.css';

export default function Copyright({screenSize, width, height}) {
    return (
        <div className={styles.copyright}>
            <svg width="12" height="137" viewBox="0 0 12 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.22266 129.623C7.13281 129.709 7.84375 130.045 8.35547 130.631C8.86328 131.217 9.11719 131.996 9.11719 132.969C9.11719 133.648 8.95703 134.248 8.63672 134.768C8.3125 135.283 7.85352 135.682 7.25977 135.963C6.66602 136.244 5.97656 136.391 5.19141 136.402L4.39453 136.402C3.58984 136.402 2.88086 136.26 2.26758 135.975C1.6543 135.689 1.18164 135.281 0.849609 134.75C0.517578 134.215 0.351562 133.598 0.351562 132.898C0.351562 131.957 0.607422 131.199 1.11914 130.625C1.63086 130.051 2.35352 129.717 3.28711 129.623L3.28711 131.1C2.67383 131.17 2.23242 131.35 1.96289 131.639C1.68945 131.924 1.55273 132.344 1.55273 132.898C1.55273 133.543 1.78906 134.039 2.26172 134.387C2.73047 134.73 3.41992 134.906 4.33008 134.914L5.08594 134.914C6.00781 134.914 6.71094 134.75 7.19531 134.422C7.67969 134.09 7.92187 133.605 7.92187 132.969C7.92187 132.387 7.79102 131.949 7.5293 131.656C7.26758 131.363 6.83203 131.178 6.22266 131.1L6.22266 129.623ZM5.77148 128.697C5.15039 128.697 4.5918 128.574 4.0957 128.328C3.5957 128.082 3.21289 127.736 2.94727 127.291C2.67773 126.846 2.54297 126.334 2.54297 125.756C2.54297 124.9 2.81836 124.207 3.36914 123.676C3.91992 123.141 4.65039 122.852 5.56055 122.809L5.89453 122.803C6.51953 122.803 7.07812 122.924 7.57031 123.166C8.0625 123.404 8.44336 123.748 8.71289 124.197C8.98242 124.643 9.11719 125.158 9.11719 125.744C9.11719 126.639 8.82031 127.355 8.22656 127.895C7.62891 128.43 6.83398 128.697 5.8418 128.697L5.77148 128.697ZM5.89453 127.273C6.54687 127.273 7.05859 127.139 7.42969 126.869C7.79687 126.6 7.98047 126.225 7.98047 125.744C7.98047 125.264 7.79297 124.891 7.41797 124.625C7.04297 124.355 6.49414 124.221 5.77148 124.221C5.13086 124.221 4.62305 124.359 4.24805 124.637C3.87305 124.91 3.68555 125.283 3.68555 125.756C3.68555 126.221 3.87109 126.59 4.24219 126.863C4.60937 127.137 5.16016 127.273 5.89453 127.273ZM5.89453 116.047C6.875 116.047 7.6582 116.27 8.24414 116.715C8.82617 117.16 9.11719 117.758 9.11719 118.508C9.11719 119.203 8.88867 119.76 8.43164 120.178L11.4375 120.178L11.4375 121.602L2.66016 121.602L2.66016 120.289L3.30469 120.23C2.79687 119.812 2.54297 119.244 2.54297 118.525C2.54297 117.752 2.83203 117.146 3.41016 116.709C3.98437 116.268 4.7832 116.047 5.80664 116.047L5.89453 116.047ZM5.77148 117.465C5.13867 117.465 4.63672 117.592 4.26562 117.846C3.89453 118.096 3.70898 118.455 3.70898 118.924C3.70898 119.506 3.94922 119.924 4.42969 120.178L7.24219 120.178C7.73437 119.92 7.98047 119.498 7.98047 118.912C7.98047 118.459 7.79883 118.105 7.43555 117.852C7.06836 117.594 6.51367 117.465 5.77148 117.465ZM9 113.322L9 114.746L2.66016 114.746L2.66016 113.322L9 113.322ZM1.01367 114.834C0.794921 114.834 0.61328 114.766 0.468749 114.629C0.324218 114.488 0.251952 114.289 0.251952 114.031C0.251952 113.773 0.324218 113.574 0.468749 113.434C0.61328 113.293 0.794921 113.223 1.01367 113.223C1.22851 113.223 1.4082 113.293 1.55273 113.434C1.69336 113.574 1.76367 113.773 1.76367 114.031C1.76367 114.289 1.69336 114.488 1.55273 114.629C1.4082 114.766 1.22851 114.834 1.01367 114.834ZM3.96094 108.447C3.92969 108.635 3.91406 108.828 3.91406 109.027C3.91406 109.68 4.16406 110.119 4.66406 110.346L9 110.346L9 111.77L2.66016 111.77L2.66016 110.41L3.36914 110.375C2.81836 110.031 2.54297 109.555 2.54297 108.945C2.54297 108.742 2.57031 108.574 2.625 108.441L3.96094 108.447ZM6.96094 105.225L2.66015 103.936L2.66015 102.418L9.96094 104.937C11.0273 105.324 11.5605 105.98 11.5605 106.906C11.5605 107.113 11.5254 107.342 11.4551 107.592L10.3535 107.592L10.3711 107.322C10.3711 106.963 10.3047 106.693 10.1719 106.514C10.043 106.33 9.82422 106.186 9.51562 106.08L8.9707 105.875L2.66015 108.102L2.66015 106.566L6.96094 105.225ZM5.7832 101.926C4.79883 101.926 4.01367 101.695 3.42773 101.234C2.83789 100.77 2.54297 100.154 2.54297 99.3887C2.54297 98.666 2.79492 98.0977 3.29883 97.6836L2.66015 97.6191L2.66015 96.3359L8.80664 96.3359C9.63867 96.3359 10.2949 96.5957 10.7754 97.1152C11.2559 97.6309 11.4961 98.3281 11.4961 99.207C11.4961 99.6719 11.3984 100.127 11.2031 100.572C11.0117 101.014 10.7598 101.35 10.4473 101.58L9.5918 100.906C10.1113 100.469 10.3711 99.9297 10.3711 99.2891C10.3711 98.8164 10.2422 98.4434 9.98437 98.1699C9.73047 97.8965 9.35547 97.7598 8.85937 97.7598L8.43164 97.7598C8.88867 98.1699 9.11719 98.7168 9.11719 99.4004C9.11719 100.143 8.82226 100.75 8.23242 101.223C7.64258 101.691 6.82617 101.926 5.7832 101.926ZM5.90625 100.508C6.54297 100.508 7.04492 100.379 7.41211 100.121C7.77539 99.8594 7.95703 99.498 7.95703 99.0371C7.95703 98.4629 7.71094 98.0371 7.21875 97.7598L4.42969 97.7598C3.94922 98.0293 3.70898 98.4512 3.70898 99.0254C3.70898 99.4941 3.89453 99.8594 4.26562 100.121C4.63672 100.379 5.18359 100.508 5.90625 100.508ZM3.35156 93.4648C2.8125 93 2.54297 92.4121 2.54297 91.7012C2.54297 90.3496 3.31445 89.6641 4.85742 89.6445L9 89.6445L9 91.0684L4.91015 91.0684C4.47265 91.0684 4.16406 91.1641 3.98437 91.3555C3.80078 91.543 3.70898 91.8203 3.70898 92.1875C3.70898 92.7578 3.96289 93.1836 4.4707 93.4648L9 93.4648L9 94.8887L-1.84074e-06 94.8887L-1.90298e-06 93.4648L3.35156 93.4648ZM1.11914 86.416L2.66015 86.416L2.66015 85.2969L3.71484 85.2969L3.71484 86.416L7.2539 86.416C7.49609 86.416 7.67187 86.3691 7.78125 86.2754C7.88672 86.1777 7.93945 86.0059 7.93945 85.7598C7.93945 85.5957 7.91992 85.4297 7.88086 85.2617L8.98242 85.2617C9.07226 85.5859 9.11719 85.8984 9.11719 86.1992C9.11719 87.293 8.51367 87.8398 7.30664 87.8398L3.71484 87.8398L3.71484 88.8828L2.66015 88.8828L2.66015 87.8398L1.11914 87.8398L1.11914 86.416ZM10.9219 84.002L10.4648 84.7695C10.1094 84.543 9.79883 84.3887 9.5332 84.3066C9.27148 84.2207 9.0039 84.1758 8.73047 84.1719L7.62304 84.1719L7.62304 82.8887L8.64844 82.8945C9.0625 82.8984 9.47656 83.0039 9.89062 83.2109C10.3086 83.4141 10.6523 83.6777 10.9219 84.002ZM6.80273 73.9824C6.42773 73.9824 6.13867 74.1152 5.93554 74.3809C5.73242 74.6426 5.52734 75.1172 5.32031 75.8047C5.11328 76.4922 4.88281 77.0391 4.6289 77.4453C4.14062 78.2227 3.5039 78.6113 2.71875 78.6113C2.03125 78.6113 1.46484 78.332 1.01953 77.7734C0.574216 77.2109 0.35156 76.4824 0.35156 75.5879C0.35156 74.9941 0.460935 74.4648 0.679685 74C0.898435 73.5352 1.21093 73.1699 1.61718 72.9043C2.01953 72.6387 2.46679 72.5059 2.95898 72.5059L2.95898 73.9824C2.51367 73.9824 2.16601 74.123 1.91601 74.4043C1.66211 74.6816 1.53515 75.0801 1.53515 75.5996C1.53515 76.084 1.63867 76.4609 1.8457 76.7305C2.05273 76.9961 2.34179 77.1289 2.71289 77.1289C3.02539 77.1289 3.28711 76.9844 3.49804 76.6953C3.70508 76.4062 3.9082 75.9297 4.10742 75.2656C4.30273 74.6016 4.52734 74.0684 4.78125 73.666C5.03125 73.2637 5.32031 72.9687 5.64843 72.7812C5.97265 72.5937 6.35351 72.5 6.79101 72.5C7.50195 72.5 8.06836 72.7734 8.49023 73.3203C8.9082 73.8633 9.11718 74.6016 9.11718 75.5352C9.11718 76.1523 9.0039 76.7207 8.77734 77.2402C8.54687 77.7559 8.23047 78.1582 7.82812 78.4473C7.42578 78.7324 6.95703 78.875 6.42187 78.875L6.42187 77.3926C6.90625 77.3926 7.28125 77.2324 7.54687 76.9121C7.8125 76.5918 7.94531 76.1328 7.94531 75.5352C7.94531 75.0195 7.84179 74.6328 7.63476 74.375C7.42383 74.1133 7.14648 73.9824 6.80273 73.9824ZM5.89453 65.7852C6.875 65.7852 7.6582 66.0078 8.24414 66.4531C8.82617 66.8984 9.11718 67.4961 9.11718 68.2461C9.11718 68.9414 8.88867 69.498 8.43164 69.916L11.4375 69.916L11.4375 71.3398L2.66015 71.3398L2.66015 70.0273L3.30468 69.9687C2.79687 69.5508 2.54297 68.9824 2.54297 68.2637C2.54297 67.4902 2.83203 66.8848 3.41015 66.4473C3.98437 66.0059 4.7832 65.7852 5.80664 65.7852L5.89453 65.7852ZM5.77148 67.2031C5.13867 67.2031 4.63672 67.3301 4.26562 67.584C3.89453 67.834 3.70898 68.1934 3.70898 68.6621C3.70898 69.2441 3.94922 69.6621 4.42968 69.916L7.24218 69.916C7.73437 69.6582 7.98047 69.2363 7.98047 68.6504C7.98047 68.1973 7.79883 67.8437 7.43554 67.5898C7.06836 67.332 6.51367 67.2031 5.77148 67.2031ZM5.77148 64.8418C5.15039 64.8418 4.59179 64.7187 4.0957 64.4727C3.5957 64.2266 3.21289 63.8809 2.94726 63.4355C2.67773 62.9902 2.54297 62.4785 2.54297 61.9004C2.54297 61.0449 2.81836 60.3516 3.36914 59.8203C3.91992 59.2852 4.65039 58.9961 5.56054 58.9531L5.89453 58.9473C6.51953 58.9473 7.07812 59.0684 7.57031 59.3105C8.0625 59.5488 8.44336 59.8926 8.71289 60.3418C8.98242 60.7871 9.11718 61.3027 9.11718 61.8887C9.11718 62.7832 8.82031 63.5 8.22656 64.0391C7.6289 64.5742 6.83398 64.8418 5.84179 64.8418L5.77148 64.8418ZM5.89453 63.418C6.54687 63.418 7.05859 63.2832 7.42968 63.0137C7.79687 62.7441 7.98047 62.3691 7.98047 61.8887C7.98047 61.4082 7.79297 61.0352 7.41797 60.7695C7.04297 60.5 6.49414 60.3652 5.77148 60.3652C5.13086 60.3652 4.62304 60.5039 4.24804 60.7812C3.87304 61.0547 3.68554 61.4277 3.68554 61.9004C3.68554 62.3652 3.87109 62.7344 4.24218 63.0078C4.60937 63.2812 5.16015 63.418 5.89453 63.418ZM3.96093 54.4238C3.92968 54.6113 3.91406 54.8047 3.91406 55.0039C3.91406 55.6562 4.16406 56.0957 4.66406 56.3223L9 56.3223L9 57.7461L2.66015 57.7461L2.66015 56.3867L3.36914 56.3516C2.81836 56.0078 2.54297 55.5312 2.54297 54.9219C2.54297 54.7187 2.57031 54.5508 2.625 54.418L3.96093 54.4238ZM1.11914 51.4473L2.66015 51.4473L2.66015 50.3281L3.71484 50.3281L3.71484 51.4473L7.2539 51.4473C7.49609 51.4473 7.67187 51.4004 7.78125 51.3066C7.88671 51.209 7.93945 51.0371 7.93945 50.791C7.93945 50.627 7.91992 50.4609 7.88086 50.293L8.98242 50.293C9.07226 50.6172 9.11718 50.9297 9.11718 51.2305C9.11718 52.3242 8.51367 52.8711 7.30664 52.8711L3.71484 52.8711L3.71484 53.9141L2.66015 53.9141L2.66015 52.8711L1.11914 52.8711L1.11914 51.4473ZM6.80273 44.6387C6.42773 44.6387 6.13867 44.7715 5.93554 45.0371C5.73242 45.2988 5.52734 45.7734 5.32031 46.4609C5.11328 47.1484 4.88281 47.6953 4.6289 48.1016C4.14062 48.8789 3.5039 49.2676 2.71875 49.2676C2.03125 49.2676 1.46484 48.9883 1.01953 48.4297C0.574215 47.8672 0.351559 47.1387 0.351559 46.2441C0.351559 45.6504 0.460933 45.1211 0.679683 44.6562C0.898433 44.1914 1.21093 43.8262 1.61718 43.5605C2.01953 43.2949 2.46679 43.1621 2.95898 43.1621L2.95898 44.6387C2.51367 44.6387 2.16601 44.7793 1.91601 45.0605C1.66211 45.3379 1.53515 45.7363 1.53515 46.2559C1.53515 46.7402 1.63867 47.1172 1.8457 47.3867C2.05273 47.6523 2.34179 47.7852 2.71289 47.7852C3.02539 47.7852 3.28711 47.6406 3.49804 47.3516C3.70507 47.0625 3.9082 46.5859 4.10742 45.9219C4.30273 45.2578 4.52734 44.7246 4.78125 44.3223C5.03125 43.9199 5.32031 43.625 5.64843 43.4375C5.97265 43.25 6.35351 43.1562 6.79101 43.1562C7.50195 43.1562 8.06836 43.4297 8.49023 43.9766C8.9082 44.5195 9.11718 45.2578 9.11718 46.1914C9.11718 46.8086 9.0039 47.377 8.77734 47.8965C8.54687 48.4121 8.23046 48.8145 7.82812 49.1035C7.42578 49.3887 6.95703 49.5312 6.42187 49.5312L6.42187 48.0488C6.90625 48.0488 7.28125 47.8887 7.54687 47.5684C7.8125 47.248 7.94531 46.7891 7.94531 46.1914C7.94531 45.6758 7.84179 45.2891 7.63476 45.0312C7.42382 44.7695 7.14648 44.6387 6.80273 44.6387ZM9.11718 39.2012C9.11718 40.1035 8.83398 40.8359 8.26757 41.3984C7.69726 41.957 6.93945 42.2363 5.99414 42.2363L5.81836 42.2363C5.18554 42.2363 4.62109 42.1152 4.125 41.873C3.625 41.627 3.23632 41.2832 2.95898 40.8418C2.68164 40.4004 2.54296 39.9082 2.54296 39.3652C2.54296 38.502 2.81836 37.8359 3.36914 37.3672C3.91992 36.8945 4.69921 36.6582 5.70703 36.6582L6.28125 36.6582L6.28125 40.8008C6.80468 40.7578 7.21875 40.584 7.52343 40.2793C7.82812 39.9707 7.98046 39.584 7.98046 39.1191C7.98046 38.4668 7.71679 37.9355 7.18945 37.5254L7.92187 36.7578C8.30078 37.0117 8.5957 37.3516 8.80664 37.7773C9.01367 38.1992 9.11718 38.6738 9.11718 39.2012ZM3.68554 39.3711C3.68554 39.7617 3.82226 40.0781 4.0957 40.3203C4.36914 40.5586 4.75 40.7109 5.23828 40.7773L5.23828 38.0645L5.13281 38.0645C4.65625 38.0957 4.29687 38.2227 4.05468 38.4453C3.80859 38.668 3.68554 38.9766 3.68554 39.3711ZM9.11718 32.7559C9.11718 33.6582 8.83398 34.3906 8.26757 34.9531C7.69726 35.5117 6.93945 35.791 5.99414 35.791L5.81835 35.791C5.18554 35.791 4.62109 35.6699 4.125 35.4277C3.625 35.1816 3.23632 34.8379 2.95898 34.3965C2.68164 33.9551 2.54296 33.4629 2.54296 32.9199C2.54296 32.0566 2.81835 31.3906 3.36914 30.9219C3.91992 30.4492 4.69921 30.2129 5.70703 30.2129L6.28125 30.2129L6.28125 34.3555C6.80468 34.3125 7.21875 34.1387 7.52343 33.834C7.82812 33.5254 7.98046 33.1387 7.98046 32.6738C7.98046 32.0215 7.71679 31.4902 7.18945 31.0801L7.92187 30.3125C8.30078 30.5664 8.5957 30.9062 8.80664 31.332C9.01367 31.7539 9.11718 32.2285 9.11718 32.7559ZM3.68554 32.9258C3.68554 33.3164 3.82226 33.6328 4.0957 33.875C4.36914 34.1133 4.75 34.2656 5.23828 34.332L5.23828 31.6191L5.13281 31.6191C4.65625 31.6504 4.29687 31.7773 4.05468 32C3.80859 32.2227 3.68554 32.5312 3.68554 32.9258ZM8.99999 20.4687L9 26.2051L8.02148 26.2051L4.92187 23.3633C4.46484 22.9531 4.08398 22.6621 3.77929 22.4902C3.4707 22.3145 3.1621 22.2266 2.85351 22.2266C2.44726 22.2266 2.11914 22.3418 1.86914 22.5723C1.61914 22.7988 1.49414 23.1055 1.49414 23.4922C1.49414 23.9531 1.63476 24.3105 1.91601 24.5645C2.19726 24.8184 2.58203 24.9453 3.07031 24.9453L3.07031 26.3691C2.55078 26.3691 2.08398 26.252 1.66992 26.0176C1.25195 25.7793 0.927729 25.4414 0.697261 25.0039C0.466792 24.5625 0.351558 24.0547 0.351558 23.4805C0.351558 22.6523 0.560542 22 0.978511 21.5234C1.39257 21.043 1.96679 20.8027 2.70117 20.8027C3.12695 20.8027 3.57421 20.9238 4.04296 21.166C4.50781 21.4043 5.0371 21.7969 5.63085 22.3437L7.86328 24.4297L7.86328 20.4687L8.99999 20.4687ZM5.4082 13.8242C6.63476 13.8242 7.56054 14.0547 8.18554 14.5156C8.80664 14.9727 9.11718 15.6699 9.11718 16.6074C9.11718 17.5293 8.81445 18.2246 8.20898 18.6934C7.5996 19.1582 6.69921 19.3965 5.50781 19.4082L4.03124 19.4082C2.80468 19.4082 1.88476 19.1797 1.27148 18.7227C0.658198 18.2617 0.351557 17.5605 0.351557 16.6191C0.351557 15.6855 0.650385 14.9902 1.24804 14.5332C1.8457 14.0723 2.74023 13.8359 3.93164 13.8242L5.4082 13.8242ZM3.81445 15.248C3.01367 15.248 2.42773 15.3574 2.05664 15.5762C1.68164 15.7949 1.49414 16.1426 1.49414 16.6191C1.49414 17.084 1.67187 17.4258 2.02734 17.6445C2.3789 17.8633 2.92968 17.9785 3.67968 17.9902L5.61328 17.9902C6.41015 17.9902 7.0039 17.8789 7.39453 17.6562C7.78515 17.4336 7.98046 17.084 7.98046 16.6074C7.98046 16.1504 7.80078 15.8125 7.4414 15.5937C7.07812 15.375 6.51171 15.2598 5.74218 15.248L3.81445 15.248ZM8.99999 6.82812L8.99999 12.5645L8.02148 12.5645L4.92187 9.72266C4.46484 9.3125 4.08398 9.02148 3.77929 8.84961C3.4707 8.67383 3.1621 8.58594 2.85351 8.58594C2.44726 8.58594 2.11914 8.70117 1.86914 8.93164C1.61914 9.1582 1.49414 9.46484 1.49414 9.85156C1.49414 10.3125 1.63476 10.6699 1.91601 10.9238C2.19726 11.1777 2.58203 11.3047 3.07031 11.3047L3.07031 12.7285C2.55078 12.7285 2.08398 12.6113 1.66992 12.377C1.25195 12.1387 0.927729 11.8008 0.69726 11.3633C0.466791 10.9219 0.351557 10.4141 0.351557 9.83984C0.351557 9.01172 0.560541 8.35937 0.97851 7.88281C1.39257 7.40234 1.96679 7.16211 2.70117 7.16211C3.12695 7.16211 3.57421 7.2832 4.04296 7.52539C4.50781 7.76367 5.0371 8.15625 5.63085 8.70312L7.86328 10.7891L7.86328 6.82812L8.99999 6.82812ZM5.4082 0.183593C6.63476 0.183593 7.56054 0.414062 8.18554 0.874999C8.80663 1.33203 9.11718 2.0293 9.11718 2.9668C9.11718 3.88867 8.81445 4.58398 8.20898 5.05273C7.5996 5.51758 6.69921 5.75586 5.50781 5.76758L4.03124 5.76758C2.80468 5.76758 1.88476 5.53906 1.27148 5.08203C0.658197 4.62109 0.351557 3.91992 0.351557 2.97852C0.351557 2.04492 0.650385 1.34961 1.24804 0.892578C1.8457 0.43164 2.74023 0.195312 3.93163 0.183593L5.4082 0.183593ZM3.81445 1.60742C3.01367 1.60742 2.42773 1.7168 2.05663 1.93555C1.68163 2.1543 1.49413 2.50195 1.49413 2.97852C1.49413 3.44336 1.67187 3.78516 2.02734 4.00391C2.3789 4.22266 2.92968 4.33789 3.67968 4.34961L5.61328 4.34961C6.41015 4.34961 7.0039 4.23828 7.39453 4.01562C7.78515 3.79297 7.98046 3.44336 7.98046 2.9668C7.98046 2.50976 7.80078 2.17187 7.4414 1.95312C7.07812 1.73437 6.51171 1.61914 5.74218 1.60742L3.81445 1.60742Z" fill="white"/>
            </svg>

        </div>
    );
}
