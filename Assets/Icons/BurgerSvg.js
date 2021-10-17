import React from "react";
import {SvgXml} from 'react-native-svg';


const BurgerSvg = (props) => {
    const size = props.size ? props.size : 100;
    const color = props.color ? props.color : 'white' 

    return (
        <SvgXml
        width={size}
        height={size}
        xml={`
        <svg width="300" height="198" viewBox="0 0 300 198" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dii_38:526)">
<rect x="23.9999" y="58.0024" width="251.651" height="44.282" rx="22.141" fill="#F35952"/>
</g>
<g filter="url(#filter1_dii_38:526)">
<path d="M36.9604 53.9661C36.9604 33.5284 53.5284 16.9604 73.9661 16.9604L226.748 16.9604C247.195 16.9604 263.77 33.5359 263.77 53.9828C263.77 57.3942 260.982 60.1582 257.571 60.1528C174.895 60.0212 125.858 59.7736 43.1769 60.1344C39.7595 60.1493 36.9604 57.3835 36.9604 53.9661Z" fill="url(#paint0_linear_38:526)"/>
</g>
<g filter="url(#filter2_dii_38:526)">
<path d="M36.9604 105.934C36.9604 126.398 52.7851 143.443 73.2133 144.666C129.707 148.049 170.754 148.288 227.568 144.793C248.001 143.536 263.77 126.447 263.77 105.976C263.77 102.216 260.59 99.2329 256.835 99.4482C174.813 104.15 125.882 104.011 43.8541 99.4343C40.1204 99.226 36.9604 102.194 36.9604 105.934Z" fill="url(#paint1_linear_38:526)"/>
</g>
<g opacity="0.5">
<g style="mix-blend-mode:multiply" opacity="0.5">
<path d="M121.204 68.8027C122.615 78.5034 122.698 83.9442 121.204 93.6438" stroke="#E1564D" stroke-width="8" stroke-linecap="round"/>
</g>
<g style="mix-blend-mode:multiply" opacity="0.5">
<path d="M144.975 68.8027C146.386 78.5034 146.469 83.9442 144.975 93.6438" stroke="#E1564D" stroke-width="8" stroke-linecap="round"/>
</g>
<g style="mix-blend-mode:multiply" opacity="0.5">
<path d="M168.746 68.8027C170.157 78.5034 170.24 83.9442 168.746 93.6438" stroke="#E1564D" stroke-width="8" stroke-linecap="round"/>
</g>
</g>
<g filter="url(#filter3_dii_38:526)">
<path d="M116.395 46.3838C107.609 39.3569 89.1275 37.5792 89.1275 37.5792C89.1275 37.5792 93.9434 56.2828 102.761 62.7649C111.578 69.247 131.339 72.7121 131.339 72.7121C131.339 72.7121 125.18 53.4107 116.395 46.3838Z" fill="#67D5B1"/>
</g>
<g filter="url(#filter4_dii_38:526)">
<path d="M125.957 42.2735C128.183 31.2458 141.214 18.0197 141.214 18.0197C141.214 18.0197 149.526 35.4529 146.926 46.0831C144.326 56.7132 131.397 72.0549 131.397 72.0549C131.397 72.0549 123.73 53.3012 125.957 42.2735Z" fill="#67D5B1"/>
</g>
<g filter="url(#filter5_dii_38:526)">
<path d="M47.761 91.4837C47.761 91.4837 52.5322 68.8027 69.782 68.8027C87.0319 68.8027 78.1926 93.6438 99.4797 93.6438C120.767 93.6438 113.387 68.8027 131.737 68.8027C150.088 68.8027 139.93 93.6438 164.507 93.6438C189.085 93.6438 177.226 68.8027 197.277 68.8027C217.328 68.8027 214.874 91.4837 232.032 91.4837C249.19 91.4837 251.35 70.4228 251.35 70.4228" stroke="#FFC34A" stroke-width="7" stroke-linecap="round"/>
</g>
<g opacity="0.5">
<g filter="url(#filter6_dii_38:526)">
<path d="M251.249 44.3076C246.006 41.9795 243.96 40.012 242.084 35.1431C240.591 39.8617 238.754 41.9663 232.92 44.3076C238.921 46.263 240.55 48.5266 242.084 53.4721C243.969 48.9141 245.134 46.4265 251.249 44.3076Z" fill="white"/>
</g>
<g filter="url(#filter7_dii_38:526)">
<path d="M238.659 32.6123C235.164 31.0602 233.8 29.7486 232.549 26.5026C231.553 29.6483 230.329 31.0514 226.439 32.6123C230.441 33.9159 231.526 35.4249 232.549 38.722C233.806 35.6833 234.582 34.0249 238.659 32.6123Z" fill="white"/>
</g>
</g>
<g style="mix-blend-mode:multiply" opacity="0.5">
<circle r="6.48029" transform="matrix(-1 0 0 1 248.04 112.906)" fill="#FDC961"/>
</g>
<g style="mix-blend-mode:multiply" opacity="0.5">
<circle r="4.86021" transform="matrix(-1 0 0 1 236.7 128.567)" fill="#FDC961"/>
</g>
<circle opacity="0.35" cx="59.032" cy="36.2225" r="6.48029" fill="white"/>
<circle opacity="0.35" cx="71.9927" cy="27.5824" r="4.32019" fill="white"/>
<defs>
<filter id="filter0_dii_38:526" x="-12.6668" y="39.6691" width="324.984" height="117.615" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="18.3333"/>
<feGaussianBlur stdDeviation="18.3333"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.179608 0 0 0 0 0.065098 0 0 0 0 0.0596078 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:526"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:526" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.7037"/>
<feGaussianBlur stdDeviation="2.85185"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.951922 0 0 0 0 0.34502 0 0 0 0 0.315922 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:526"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-5.7037"/>
<feGaussianBlur stdDeviation="2.85185"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.830686 0 0 0 0 0.301078 0 0 0 0 0.275686 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_38:526" result="effect3_innerShadow_38:526"/>
</filter>
<filter id="filter1_dii_38:526" x="3.62712" y="0.293783" width="293.477" height="109.859" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="16.6667"/>
<feGaussianBlur stdDeviation="16.6667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.158611 0 0 0 0 0.0758333 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:526"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:526" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.18518"/>
<feGaussianBlur stdDeviation="2.59259"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.840639 0 0 0 0 0.401917 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:526"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-5.18518"/>
<feGaussianBlur stdDeviation="2.59259"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.925 0 0 0 0 0.733576 0 0 0 0 0.350729 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_38:526" result="effect3_innerShadow_38:526"/>
</filter>
<filter id="filter2_dii_38:526" x="3.62712" y="82.7572" width="293.477" height="114.553" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="16.6667"/>
<feGaussianBlur stdDeviation="16.6667"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.158611 0 0 0 0 0.0758333 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:526"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:526" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="5.18518"/>
<feGaussianBlur stdDeviation="2.59259"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.840639 0 0 0 0 0.401917 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:526"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-5.18518"/>
<feGaussianBlur stdDeviation="2.59259"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.925 0 0 0 0 0.733576 0 0 0 0 0.350729 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_38:526" result="effect3_innerShadow_38:526"/>
</filter>
<filter id="filter3_dii_38:526" x="58.8348" y="17.6359" width="102.807" height="98.479" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="11.7352"/>
<feGaussianBlur stdDeviation="11.7352"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0807843 0 0 0 0 0.167059 0 0 0 0 0.138824 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:526"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:526" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.65096"/>
<feGaussianBlur stdDeviation="1.82548"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.428157 0 0 0 0 0.885412 0 0 0 0 0.735765 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:526"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3.65096"/>
<feGaussianBlur stdDeviation="1.82548"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.373627 0 0 0 0 0.772647 0 0 0 0 0.642059 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_38:526" result="effect3_innerShadow_38:526"/>
</filter>
<filter id="filter4_dii_38:526" x="97.4191" y="4.37561" width="77.7576" height="104.791" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="11.7352"/>
<feGaussianBlur stdDeviation="11.7352"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.0807843 0 0 0 0 0.167059 0 0 0 0 0.138824 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:526"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:526" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="3.65096"/>
<feGaussianBlur stdDeviation="1.82548"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.428157 0 0 0 0 0.885412 0 0 0 0 0.735765 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:526"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-3.65096"/>
<feGaussianBlur stdDeviation="1.82548"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.373627 0 0 0 0 0.772647 0 0 0 0 0.642059 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_38:526" result="effect3_innerShadow_38:526"/>
</filter>
<filter id="filter5_dii_38:526" x="15.5936" y="50.9694" width="267.923" height="89.1746" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="14.3333"/>
<feGaussianBlur stdDeviation="14.3333"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.152778 0 0 0 0 0.0583333 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:526"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:526" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.45926"/>
<feGaussianBlur stdDeviation="2.22963"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.809722 0 0 0 0 0.309167 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:526"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-2.22963"/>
<feGaussianBlur stdDeviation="1.11481"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.925 0 0 0 0 0.706597 0 0 0 0 0.269792 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_38:526" result="effect3_innerShadow_38:526"/>
</filter>
<filter id="filter6_dii_38:526" x="223.365" y="30.3655" width="37.4393" height="37.4394" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.77758"/>
<feGaussianBlur stdDeviation="4.77758"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:526"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:526" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.48636"/>
<feGaussianBlur stdDeviation="0.743179"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:526"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1.48636"/>
<feGaussianBlur stdDeviation="0.743179"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_38:526" result="effect3_innerShadow_38:526"/>
</filter>
<filter id="filter7_dii_38:526" x="216.884" y="21.7249" width="31.3297" height="31.33" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4.77758"/>
<feGaussianBlur stdDeviation="4.77758"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0 0.2 0 0 0 0.24 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_38:526"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_38:526" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.48636"/>
<feGaussianBlur stdDeviation="0.743179"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"/>
<feBlend mode="normal" in2="shape" result="effect2_innerShadow_38:526"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="-1.48636"/>
<feGaussianBlur stdDeviation="0.743179"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 0 0.925 0 0 0 1 0"/>
<feBlend mode="normal" in2="effect2_innerShadow_38:526" result="effect3_innerShadow_38:526"/>
</filter>
<linearGradient id="paint0_linear_38:526" x1="150" y1="28" x2="150" y2="60" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFCA61"/>
<stop offset="1" stop-color="#F9B122"/>
</linearGradient>
<linearGradient id="paint1_linear_38:526" x1="146.585" y1="103.904" x2="144.425" y2="149.806" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDB628"/>
<stop offset="1" stop-color="#FFCA60"/>
</linearGradient>
</defs>
</svg>

`}  />
    )
}

export default BurgerSvg