import '../assets/css/fonts.css'

import { isMobile } from 'react-device-detect' // ajuste le chemin selon l'emplacement de ton fichier
import React, { useState } from 'react'

import { Scotch } from './Scotch'
import { SectionPresentation } from './Desktop/SectionPresentation'
import { SectionParcours } from './Desktop/SectionParcours'
import { SectionPortefolio } from './Desktop/SectionPortefolio'
import { SectionContactezMoi } from './Desktop/SectionContactezMoi'

if (!isMobile) {
    import('../assets/css/desktop.css')
} else {
    import('../assets/css/mobile.css')
}

export const DesktopPage = () => {
    return (
        <div className="main-container wide">
            <SectionPresentation />
            <SectionParcours />
            <SectionPortefolio />
            <SectionContactezMoi />
        </div>
    )
}
