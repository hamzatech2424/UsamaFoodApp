import React from "react";
import {SvgXml} from 'react-native-svg';


const PizzaSvg = (props) => {
    const size = props.size ? props.size : 100;
    const color = props.color ? props.color : 'white' 

    return (
        <SvgXml
        width={size}
        height={size}
        xml={`
        <svg width="300" height="387" viewBox="0 0 300 387" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_dii_38:597)">
        <path d="M251.069 144.069C237.796 130.797 222.04 120.268 204.698 113.085C187.357 105.902 168.77 102.205 150 102.205C131.23 102.205 112.643 105.902 95.3019 113.085C77.9605 120.268 62.2036 130.797 48.931 144.069L146.547 311.092C148.091 313.734 151.909 313.734 153.453 311.092L251.069 144.069Z" fill="url(#paint0_linear_38:597)"/>
        </g>
        <g filter="url(#filter1_dii_38:597)">
        <path d="M73.9591 188.306C59.3961 179.676 19.4724 104.64 144.606 99.6342C269.74 94.6288 243.755 171.912 237.378 180C231.001 188.089 223.736 167.002 211.284 169.534C198.833 172.065 209.331 194.776 192.61 195.642C175.89 196.508 177.177 170.312 168.959 174.59C160.742 178.867 159.693 217.432 139.294 217.432C118.894 217.432 115.209 173.486 104.087 170.141C92.9656 166.796 88.5221 196.936 73.9591 188.306Z" fill="url(#paint1_linear_38:597)"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="146.764" cy="135.772" r="5.39371" fill="#FFEB81"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="181.823" cy="140.626" r="4.85434" fill="#FFEB81"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="205.555" cy="158.965" r="4.85434" fill="#FFEB81"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="131.662" cy="174.607" r="3.23622" fill="#FFEB81"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="147.843" cy="160.583" r="4.31496" fill="#FFEB81"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="77.1851" cy="176.225" r="2.69685" fill="#FFEB81"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="165.642" cy="164.359" r="2.69685" fill="#FFEB81"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="83.6576" cy="158.965" r="4.85434" fill="#FFEB81"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="147.303" cy="194.563" r="4.85434" fill="#FFEB81"/>
        </g>
        <g style="mix-blend-mode:multiply">
        <circle cx="229.827" cy="154.111" r="6.47245" fill="#FFEB81"/>
        </g>
        <g filter="url(#filter2_dii_38:597)">
        <path d="M103.737 141.67C97.6079 136.767 84.7144 135.527 84.7144 135.527C84.7144 135.527 88.0742 148.576 94.2256 153.098C100.377 157.62 114.164 160.038 114.164 160.038C114.164 160.038 109.867 146.572 103.737 141.67Z" fill="#67D5B1"/>
        </g>
        <g filter="url(#filter3_dii_38:597)">
        <path d="M111.487 138.802C113.041 131.109 122.131 121.882 122.131 121.882C122.131 121.882 127.931 134.044 126.117 141.46C124.302 148.876 115.282 159.579 115.282 159.579C115.282 159.579 109.934 146.496 111.487 138.802Z" fill="#67D5B1"/>
        </g>
        <g filter="url(#filter4_dii_38:597)">
        <path d="M197.639 221.033C204.349 216.961 217.295 217.394 217.295 217.394C217.295 217.394 212.281 229.9 205.598 233.592C198.915 237.283 184.932 237.904 184.932 237.904C184.932 237.904 190.929 225.104 197.639 221.033Z" fill="#67D5B1"/>
        </g>
        <g filter="url(#filter5_dii_38:597)">
        <path d="M190.323 217.19C189.775 209.36 181.949 199.038 181.949 199.038C181.949 199.038 174.63 210.352 175.473 217.94C176.316 225.528 183.881 237.304 183.881 237.304C183.881 237.304 190.872 225.019 190.323 217.19Z" fill="#67D5B1"/>
        </g>
        <g filter="url(#filter6_dii_38:597)">
        <circle cx="114.175" cy="200.27" r="18.878" transform="rotate(-12.1465 114.175 200.27)" fill="url(#paint2_linear_38:597)"/>
        </g>
        <g style="mix-blend-mode:multiply" opacity="0.35">
        <circle cx="123.066" cy="200.564" r="2.69685" transform="rotate(-12.1465 123.066 200.564)" fill="#CC4A41"/>
        </g>
        <g style="mix-blend-mode:multiply" opacity="0.35">
        <circle cx="114.216" cy="203.02" r="3.23622" transform="rotate(-12.1465 114.216 203.02)" fill="#CC4A41"/>
        </g>
        <g style="mix-blend-mode:multiply" opacity="0.35">
        <circle cx="120.85" cy="208.213" r="2.15748" transform="rotate(-12.1465 120.85 208.213)" fill="#CC4A41"/>
        </g>
        <g filter="url(#filter7_dii_38:597)">
        <circle cx="148.695" cy="254.207" r="18.878" transform="rotate(-12.1465 148.695 254.207)" fill="url(#paint3_linear_38:597)"/>
        </g>
        <g style="mix-blend-mode:multiply" opacity="0.35">
        <circle cx="157.586" cy="254.501" r="2.69685" transform="rotate(-12.1465 157.586 254.501)" fill="#CC4A41"/>
        </g>
        <g style="mix-blend-mode:multiply" opacity="0.35">
        <circle cx="148.736" cy="256.957" r="3.23622" transform="rotate(-12.1465 148.736 256.957)" fill="#CC4A41"/>
        </g>
        <g style="mix-blend-mode:multiply" opacity="0.35">
        <circle cx="155.37" cy="262.15" r="2.15748" transform="rotate(-12.1465 155.37 262.15)" fill="#CC4A41"/>
        </g>
        <g filter="url(#filter8_dii_38:597)">
        <circle cx="185.059" cy="160.043" r="18.878" transform="rotate(-12.1465 185.059 160.043)" fill="url(#paint4_linear_38:597)"/>
        </g>
        <g style="mix-blend-mode:multiply" opacity="0.35">
        <circle cx="193.949" cy="160.337" r="2.69685" transform="rotate(-12.1465 193.949 160.337)" fill="#CC4A41"/>
        </g>
        <g style="mix-blend-mode:multiply" opacity="0.35">
        <circle cx="185.099" cy="162.793" r="3.23622" transform="rotate(-12.1465 185.099 162.793)" fill="#CC4A41"/>
        </g>
        <g style="mix-blend-mode:multiply" opacity="0.35">
        <circle cx="191.734" cy="167.986" r="2.15748" transform="rotate(-12.1465 191.734 167.986)" fill="#CC4A41"/>
        </g>
        <g filter="url(#filter9_dii_38:597)">
        <path d="M250.736 144.069C237.464 130.796 221.707 120.268 204.366 113.085C187.024 105.902 168.438 102.205 149.667 102.205C130.897 102.205 112.311 105.902 94.9694 113.085C77.6279 120.268 61.8711 130.796 48.5985 144.069" stroke="url(#paint5_linear_38:597)" stroke-width="32" stroke-linecap="round"/>
        </g>
        <defs>
        <filter id="filter0_dii_38:597" x="-33.7623" y="19.0532" width="367.525" height="367.525" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="23.9473"/>
        <feGaussianBlur stdDeviation="23.9473"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.191373 0 0 0 0 0.145098 0 0 0 0 0.054902 0 0 0 0.24 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="7.45028"/>
        <feGaussianBlur stdDeviation="3.72514"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.76902 0 0 0 0 0.29098 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-7.45028"/>
        <feGaussianBlur stdDeviation="3.72514"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.885098 0 0 0 0 0.671078 0 0 0 0 0.253922 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <filter id="filter1_dii_38:597" x="44.2271" y="89.4014" width="211.746" height="142.03" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2"/>
        <feGaussianBlur stdDeviation="6"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.724675 0 0 0 0 0.116667 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="6.0109"/>
        <feGaussianBlur stdDeviation="3.00545"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.984917 0 0 0 0 0.587417 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-6.0109"/>
        <feGaussianBlur stdDeviation="3.00545"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.925 0 0 0 0 0.859479 0 0 0 0 0.512604 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <filter id="filter2_dii_38:597" x="56.4844" y="118.066" width="85.9159" height="82.8965" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="11.7352"/>
        <feGaussianBlur stdDeviation="11.7352"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0807843 0 0 0 0 0.167059 0 0 0 0 0.138824 0 0 0 0.24 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="3.65096"/>
        <feGaussianBlur stdDeviation="1.82548"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.428157 0 0 0 0 0.885412 0 0 0 0 0.735765 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-3.65096"/>
        <feGaussianBlur stdDeviation="1.82548"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.373627 0 0 0 0 0.772647 0 0 0 0 0.642059 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <filter id="filter3_dii_38:597" x="84.4817" y="108.815" width="68.4402" height="87.3003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="11.7352"/>
        <feGaussianBlur stdDeviation="11.7352"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0807843 0 0 0 0 0.167059 0 0 0 0 0.138824 0 0 0 0.24 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="3.65096"/>
        <feGaussianBlur stdDeviation="1.82548"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.428157 0 0 0 0 0.885412 0 0 0 0 0.735765 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-3.65096"/>
        <feGaussianBlur stdDeviation="1.82548"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.373627 0 0 0 0 0.772647 0 0 0 0 0.642059 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <filter id="filter4_dii_38:597" x="157.473" y="199.365" width="87.2748" height="80.0283" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="11.7352"/>
        <feGaussianBlur stdDeviation="11.7352"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0807843 0 0 0 0 0.167059 0 0 0 0 0.138824 0 0 0 0.24 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="3.65096"/>
        <feGaussianBlur stdDeviation="1.82548"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.428157 0 0 0 0 0.885412 0 0 0 0 0.735765 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-3.65096"/>
        <feGaussianBlur stdDeviation="1.82548"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.373627 0 0 0 0 0.772647 0 0 0 0 0.642059 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <filter id="filter5_dii_38:597" x="151.048" y="186.927" width="63.7446" height="85.958" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="11.7352"/>
        <feGaussianBlur stdDeviation="11.7352"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.0807843 0 0 0 0 0.167059 0 0 0 0 0.138824 0 0 0 0.24 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="3.65096"/>
        <feGaussianBlur stdDeviation="1.82548"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.428157 0 0 0 0 0.885412 0 0 0 0 0.735765 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-3.65096"/>
        <feGaussianBlur stdDeviation="1.82548"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.373627 0 0 0 0 0.772647 0 0 0 0 0.642059 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <filter id="filter6_dii_38:597" x="75.4813" y="169.709" width="77.3883" height="77.3883" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="8.13333"/>
        <feGaussianBlur stdDeviation="8.13333"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.171765 0 0 0 0 0.0658824 0 0 0 0 0.0588235 0 0 0 0.24 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2.53037"/>
        <feGaussianBlur stdDeviation="1.26519"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.910353 0 0 0 0 0.349176 0 0 0 0 0.311765 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-2.53037"/>
        <feGaussianBlur stdDeviation="1.26519"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.794412 0 0 0 0 0.304706 0 0 0 0 0.272059 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <filter id="filter7_dii_38:597" x="110.001" y="223.646" width="77.3883" height="77.3883" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="8.13333"/>
        <feGaussianBlur stdDeviation="8.13333"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.171765 0 0 0 0 0.0658824 0 0 0 0 0.0588235 0 0 0 0.24 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2.53037"/>
        <feGaussianBlur stdDeviation="1.26519"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.910353 0 0 0 0 0.349176 0 0 0 0 0.311765 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-2.53037"/>
        <feGaussianBlur stdDeviation="1.26519"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.794412 0 0 0 0 0.304706 0 0 0 0 0.272059 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <filter id="filter8_dii_38:597" x="146.365" y="129.482" width="77.3883" height="77.3883" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="8.13333"/>
        <feGaussianBlur stdDeviation="8.13333"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.171765 0 0 0 0 0.0658824 0 0 0 0 0.0588235 0 0 0 0.24 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="2.53037"/>
        <feGaussianBlur stdDeviation="1.26519"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.910353 0 0 0 0 0.349176 0 0 0 0 0.311765 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-2.53037"/>
        <feGaussianBlur stdDeviation="1.26519"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.794412 0 0 0 0 0.304706 0 0 0 0 0.272059 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <filter id="filter9_dii_38:597" x="1.97107" y="0.372559" width="295.393" height="295.393" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="12"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.174902 0 0 0 0 0.108235 0 0 0 0 0.0243137 0 0 0 0.24 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:597"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:597" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="5.49629"/>
        <feGaussianBlur stdDeviation="2.74815"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.928108 0 0 0 0 0.619149 0 0 0 0 0.230226 0 0 0 1 0"/>
        <feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:597"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-2.74815"/>
        <feGaussianBlur stdDeviation="1.37407"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.808922 0 0 0 0 0.500588 0 0 0 0 0.112451 0 0 0 1 0"/>
        <feBlend mode="normal" in2="effect2_innerShadow_38:597" result="effect3_innerShadow_38:597"/>
        </filter>
        <linearGradient id="paint0_linear_38:597" x1="150" y1="317" x2="155.394" y2="112.04" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F0A513"/>
        <stop offset="1" stop-color="#F4B946"/>
        </linearGradient>
        <linearGradient id="paint1_linear_38:597" x1="150.1" y1="99.4014" x2="150.1" y2="217.432" gradientUnits="userSpaceOnUse">
        <stop stop-color="#FFED8D"/>
        <stop offset="1" stop-color="#FFED8D"/>
        </linearGradient>
        <linearGradient id="paint2_linear_38:597" x1="107.703" y1="182.471" x2="121.187" y2="219.148" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DB544B"/>
        <stop offset="1" stop-color="#D7463C"/>
        </linearGradient>
        <linearGradient id="paint3_linear_38:597" x1="142.223" y1="236.408" x2="155.707" y2="273.085" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DB544B"/>
        <stop offset="1" stop-color="#D7463C"/>
        </linearGradient>
        <linearGradient id="paint4_linear_38:597" x1="178.587" y1="142.244" x2="192.071" y2="178.921" gradientUnits="userSpaceOnUse">
        <stop stop-color="#DB544B"/>
        <stop offset="1" stop-color="#D7463C"/>
        </linearGradient>
        <linearGradient id="paint5_linear_38:597" x1="150" y1="118" x2="150" y2="87" gradientUnits="userSpaceOnUse">
        <stop offset="0.00550127" stop-color="#D98317"/>
        <stop offset="0.471823" stop-color="#E88911"/>
        <stop offset="1" stop-color="#D87800"/>
        </linearGradient>
        </defs>
</svg>`}  />
    )
}

export default PizzaSvg