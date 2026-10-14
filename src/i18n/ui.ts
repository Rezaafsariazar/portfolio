export type Lang = 'en' | 'de';

export const ui = {
  en: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Reza Afsariazar — Mobility data, GIS and urban planning',
    description:
      'Reza Afsariazar is a Sustainable Mobility M.Sc. student at HfWU and research assistant at BWIM, working on mobility data, GIS and urban planning in Karlsruhe. Projects include ShadeKA, a shade-optimised pedestrian routing app.',
    skip: 'Skip to content',
    nav: { projects: 'Projects', cv: 'Experience', about: 'About', contact: 'Contact' },
    langSwitch: 'DE',
    langSwitchLabel: 'Diese Seite auf Deutsch lesen',

    role: 'Mobility data · GIS · Urban planning',
    intro:
      "Master's student in Sustainable Mobility at HfWU and research assistant at BWIM, where I analyse mobility quality across German cities. I work with mobility data, GIS and urban planning, and build web tools that make spatial data usable.",
    facts: { based: 'Based in', focus: 'Focus', studying: 'Studying', working: 'Research assistant' },
    factFocus: 'Mobility data, GIS, urban planning',
    emailAction: 'Email me',
    copy: 'Copy',
    copied: 'Copied',
    copyFail: 'Press ⌘/Ctrl+C',
    cvDownload: 'Download CV (PDF)',

    projectsH: 'Projects',
    projectsP: 'Selected work in mobility, geodata and web development.',
    roleLabel: 'My role',
    stackLabel: 'Stack',
    states: { live: 'Live', 'in-progress': 'In progress', archived: 'Archived', planned: 'Planned' },
    demo: 'Live demo',
    source: 'Source code',
    report: 'Report',

    cvH: 'Experience & education',
    cvP: 'Where I have worked and studied.',
    groups: { experience: 'Experience', education: 'Education' },

    aboutH: 'About',
    aboutP: 'Background and skills.',
    aboutLong: 'A longer introduction goes here: how you came to mobility and geodata, what kind of problems you want to work on, and anything a recruiter should know that the list above does not say.',

    contactH: 'Contact',
    contactP: 'Open to questions, collaborations and job opportunities.',

    figureH: 'Shadow study',
    figureNote: 'Interactive sketch of the principle behind ShadeKA: move the slider to change the time of day and watch the shadows turn.',
    time: 'Time of day',
    alt: 'Sun altitude',
    az: 'Azimuth',
    phases: { low: 'Long shadows', mid: 'Mid-day', high: 'Short shadows' },
    plateLabel: 'Top-down view of a city block where building and tree shadows move with the time of day',
    legend: { building: 'Building', tree: 'Tree', shadow: 'Shadow', sun: 'Sun path' },

    placeholder: 'To add',
    imprintNote: '',
  },
  de: {
    htmlLang: 'de',
    ogLocale: 'de_DE',
    title: 'Reza Afsariazar — Mobilitätsdaten, GIS und Stadtplanung',
    description:
      'Reza Afsariazar ist Masterstudent für Nachhaltige Mobilität an der HfWU und wissenschaftliche Hilfskraft am BWIM. Schwerpunkte: Mobilitätsdaten, GIS und Stadtplanung in Karlsruhe. Projekte u. a. ShadeKA, eine schattenoptimierte Routing-App.',
    skip: 'Zum Inhalt springen',
    nav: { projects: 'Projekte', cv: 'Werdegang', about: 'Über mich', contact: 'Kontakt' },
    langSwitch: 'EN',
    langSwitchLabel: 'Read this page in English',

    role: 'Mobilitätsdaten · GIS · Stadtplanung',
    intro:
      'Masterstudent für Nachhaltige Mobilität an der HfWU und wissenschaftliche Hilfskraft am BWIM, wo ich die Mobilitätsqualität in deutschen Städten analysiere. Ich arbeite mit Mobilitätsdaten, GIS und Stadtplanung und baue Web-Tools, die Geodaten nutzbar machen.',
    facts: { based: 'Standort', focus: 'Schwerpunkt', studying: 'Studium', working: 'Hilfskraft' },
    factFocus: 'Mobilitätsdaten, GIS, Stadtplanung',
    emailAction: 'E-Mail schreiben',
    copy: 'Kopieren',
    copied: 'Kopiert',
    copyFail: '⌘/Strg+C drücken',
    cvDownload: 'Lebenslauf (PDF)',

    projectsH: 'Projekte',
    projectsP: 'Ausgewählte Arbeiten aus Mobilität, Geodaten und Webentwicklung.',
    roleLabel: 'Meine Rolle',
    stackLabel: 'Technologien',
    states: { live: 'Live', 'in-progress': 'In Arbeit', archived: 'Archiviert', planned: 'Geplant' },
    demo: 'Live-Demo',
    source: 'Quellcode',
    report: 'Bericht',

    cvH: 'Werdegang',
    cvP: 'Wo ich gearbeitet und studiert habe.',
    groups: { experience: 'Berufserfahrung', education: 'Ausbildung' },

    aboutH: 'Über mich',
    aboutP: 'Hintergrund und Kenntnisse.',
    aboutLong: 'Hier kommt eine längere Vorstellung hin: wie du zu Mobilität und Geodaten gekommen bist, an welchen Problemen du arbeiten möchtest und was Personalverantwortliche sonst wissen sollten.',

    contactH: 'Kontakt',
    contactP: 'Offen für Fragen, Zusammenarbeit und berufliche Möglichkeiten.',

    figureH: 'Schattenstudie',
    figureNote: 'Interaktive Skizze des Prinzips hinter ShadeKA: Mit dem Regler die Uhrzeit ändern und zusehen, wie die Schatten wandern.',
    time: 'Uhrzeit',
    alt: 'Sonnenhöhe',
    az: 'Azimut',
    phases: { low: 'Lange Schatten', mid: 'Mittag', high: 'Kurze Schatten' },
    plateLabel: 'Draufsicht auf einen Stadtblock, in dem Gebäude- und Baumschatten mit der Uhrzeit wandern',
    legend: { building: 'Gebäude', tree: 'Baum', shadow: 'Schatten', sun: 'Sonnenbahn' },

    placeholder: 'Ergänzen',
    imprintNote: '',
  },
} as const;
