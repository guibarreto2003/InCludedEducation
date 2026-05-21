import readingImage from '../assets/reading.jpg'
import chronicleImage from '../assets/chronicle.jpg'
import grammarImage from '../assets/grammar.jpg'

const grades = [
  'firstGrade',
  'secondGrade',
  'thirdGrade',
  'fourthGrade',
  'fifthGrade',
  'sixthGrade',
  'seventhGrade',
  'eighthGrade',
  'ninthGrade',
  'firstHighSchool',
  'secondHighSchool',
  'thirdHighSchool'
]

const authors = [
  {
    name: 'Cirleide Santos',
    role: {
      en: 'Portuguese Teacher',
      pt: 'Professora de português'
    }
  },
  {
    name: 'Marina Costa',
    role: {
      en: 'Elementary Portuguese Teacher',
      pt: 'Professora de português do fundamental'
    }
  },
  {
    name: 'Rafael Mendes',
    role: {
      en: 'Portuguese and Literature Teacher',
      pt: 'Professor de português e literatura'
    }
  },
  {
    name: 'Fernanda Rocha',
    role: {
      en: 'Writing and Exam Prep Teacher',
      pt: 'Professora de redação e preparação para exames'
    }
  },
  {
    name: 'Cláudia Martins',
    role: {
      en: 'Literature Teacher',
      pt: 'Professora de literatura'
    }
  }
]

const defaultReviews = {
  en: [
    'Ready to use in class.',
    'Clear structure and practical activities.',
    'Helpful for planning and review lessons.'
  ],
  pt: [
    'Pronto para usar em sala de aula.',
    'Estrutura clara e atividades práticas.',
    'Ajuda no planejamento e nas aulas de revisão.'
  ]
}

const subjectImages = {
  portuguese: readingImage,
  literature: chronicleImage,
  writing: readingImage,
  grammar: grammarImage,
  readingInterpretation: readingImage,
  chronicle: chronicleImage,
  poetry: chronicleImage,
  shortStory: chronicleImage,
  novel: chronicleImage,
  linguistics: grammarImage,
  textualGenres: readingImage,
  essay: readingImage,
  argumentation: readingImage,
  orthography: grammarImage,
  punctuation: grammarImage,
  syntax: grammarImage,
  morphology: grammarImage,
  semantics: readingImage,
  cohesion: readingImage,
  coherence: readingImage,
  brazilianLiterature: chronicleImage,
  enemWriting: readingImage
}

const subjectContent = {
  portuguese: {
    en: 'Portuguese Language',
    pt: 'Língua portuguesa',
    focusEn: 'language use, reading, vocabulary, and communication',
    focusPt: 'uso da língua, leitura, vocabulário e comunicação'
  },
  literature: {
    en: 'Literature',
    pt: 'Literatura',
    focusEn: 'literary reading, context, authors, and interpretation',
    focusPt: 'leitura literária, contexto, autores e interpretação'
  },
  writing: {
    en: 'Writing',
    pt: 'Escrita',
    focusEn: 'planning, drafting, revision, and textual production',
    focusPt: 'planejamento, escrita, revisão e produção textual'
  },
  grammar: {
    en: 'Grammar',
    pt: 'Gramática',
    focusEn: 'rules, examples, exercises, and language analysis',
    focusPt: 'regras, exemplos, exercícios e análise linguística'
  },
  readingInterpretation: {
    en: 'Reading Interpretation',
    pt: 'Interpretação de texto',
    focusEn: 'comprehension, inference, evidence, and critical reading',
    focusPt: 'compreensão, inferência, evidências e leitura crítica'
  },
  chronicle: {
    en: 'Chronicle',
    pt: 'Crônica',
    focusEn: 'chronicle structure, everyday themes, humor, and point of view',
    focusPt: 'estrutura da crônica, temas do cotidiano, humor e ponto de vista'
  },
  poetry: {
    en: 'Poetry',
    pt: 'Poesia',
    focusEn: 'poetic language, rhythm, imagery, and interpretation',
    focusPt: 'linguagem poética, ritmo, imagens e interpretação'
  },
  shortStory: {
    en: 'Short Story',
    pt: 'Conto',
    focusEn: 'narrator, characters, conflict, setting, and ending',
    focusPt: 'narrador, personagens, conflito, espaço e desfecho'
  },
  novel: {
    en: 'Novel',
    pt: 'Romance',
    focusEn: 'plot, chapters, characters, and literary analysis',
    focusPt: 'enredo, capítulos, personagens e análise literária'
  },
  linguistics: {
    en: 'Linguistics',
    pt: 'Linguística',
    focusEn: 'language variation, speech, meaning, and social use',
    focusPt: 'variação linguística, fala, sentido e uso social da língua'
  },
  textualGenres: {
    en: 'Textual Genres',
    pt: 'Gêneros textuais',
    focusEn: 'purpose, audience, structure, and genre comparison',
    focusPt: 'finalidade, público, estrutura e comparação de gêneros'
  },
  essay: {
    en: 'Essay',
    pt: 'Redação',
    focusEn: 'essay structure, thesis, development, and conclusion',
    focusPt: 'estrutura da redação, tese, desenvolvimento e conclusão'
  },
  argumentation: {
    en: 'Argumentation',
    pt: 'Argumentação',
    focusEn: 'claims, evidence, reasoning, and counterarguments',
    focusPt: 'teses, evidências, raciocínio e contra-argumentação'
  },
  orthography: {
    en: 'Orthography',
    pt: 'Ortografia',
    focusEn: 'spelling rules, word formation, and correction practice',
    focusPt: 'regras de escrita, formação de palavras e prática de correção'
  },
  punctuation: {
    en: 'Punctuation',
    pt: 'Pontuação',
    focusEn: 'commas, periods, questions, emphasis, and sentence rhythm',
    focusPt: 'vírgulas, pontos, perguntas, ênfase e ritmo das frases'
  },
  syntax: {
    en: 'Syntax',
    pt: 'Sintaxe',
    focusEn: 'sentence terms, clauses, periods, and syntactic analysis',
    focusPt: 'termos da oração, orações, períodos e análise sintática'
  },
  morphology: {
    en: 'Morphology',
    pt: 'Morfologia',
    focusEn: 'word classes, word formation, and grammatical functions',
    focusPt: 'classes de palavras, formação de palavras e funções gramaticais'
  },
  semantics: {
    en: 'Semantics',
    pt: 'Semântica',
    focusEn: 'meaning, ambiguity, synonyms, antonyms, and context',
    focusPt: 'sentido, ambiguidade, sinônimos, antônimos e contexto'
  },
  cohesion: {
    en: 'Cohesion',
    pt: 'Coesão',
    focusEn: 'connectors, reference, paragraph links, and textual flow',
    focusPt: 'conectivos, retomadas, ligação entre parágrafos e fluidez textual'
  },
  coherence: {
    en: 'Coherence',
    pt: 'Coerência',
    focusEn: 'logical order, topic progression, consistency, and clarity',
    focusPt: 'ordem lógica, progressão temática, consistência e clareza'
  },
  brazilianLiterature: {
    en: 'Brazilian Literature',
    pt: 'Literatura brasileira',
    focusEn: 'literary movements, authors, historical context, and texts',
    focusPt: 'movimentos literários, autores, contexto histórico e textos'
  },
  enemWriting: {
    en: 'ENEM Writing',
    pt: 'Redação ENEM',
    focusEn: 'competencies, intervention proposal, repertory, and essay practice',
    focusPt: 'competências, proposta de intervenção, repertório e prática de redação'
  }
}

const levels = [
  {
    labelEn: 'Foundation',
    labelPt: 'Fundamentos',
    descriptionEn: 'introductory explanations and guided exercises',
    descriptionPt: 'explicações introdutórias e exercícios guiados'
  },
  {
    labelEn: 'Practice Pack',
    labelPt: 'Pacote de prática',
    descriptionEn: 'classroom activities, review questions, and short tasks',
    descriptionPt: 'atividades de sala, questões de revisão e tarefas curtas'
  },
  {
    labelEn: 'Workshop',
    labelPt: 'Oficina',
    descriptionEn: 'collaborative tasks, production prompts, and peer review',
    descriptionPt: 'tarefas colaborativas, propostas de produção e revisão em pares'
  },
  {
    labelEn: 'Review Guide',
    labelPt: 'Guia de revisão',
    descriptionEn: 'summaries, checklists, examples, and consolidation exercises',
    descriptionPt: 'resumos, listas de checagem, exemplos e exercícios de consolidação'
  },
  {
    labelEn: 'Assessment Set',
    labelPt: 'Conjunto avaliativo',
    descriptionEn: 'diagnostic questions, answer keys, and follow-up activities',
    descriptionPt: 'questões diagnósticas, gabaritos e atividades de retomada'
  }
]

const subjectKeys = Object.keys(subjectContent)

const materials = subjectKeys.flatMap((subjectKey, subjectIndex) => {
  const subject = subjectContent[subjectKey]

  return levels.map((level, levelIndex) => {
    const gradeKey = grades[(subjectIndex + levelIndex) % grades.length]
    const author = authors[(subjectIndex + levelIndex) % authors.length]

    return {
      id: subjectIndex * levels.length + levelIndex + 1,

      gradeKey,
      subjectKey,

      title: {
        en: `${subject.en} ${level.labelEn}`,
        pt: `${subject.pt}: ${level.labelPt}`
      },

      image: subjectImages[subjectKey],

      author,

      preview: {
        en: `A ${level.labelEn.toLowerCase()} material focused on ${subject.focusEn}.`,
        pt: `Material de ${level.labelPt.toLowerCase()} com foco em ${subject.focusPt}.`
      },

      description: {
        en: `This ${subject.en.toLowerCase()} resource includes ${level.descriptionEn}. It was designed to support teachers with organized, ready-to-use activities for different classroom moments.`,
        pt: `Este recurso de ${subject.pt.toLowerCase()} inclui ${level.descriptionPt}. Foi pensado para apoiar professores com atividades organizadas e prontas para diferentes momentos da aula.`
      },

      reviews: defaultReviews
    }
  })
})

export default materials
