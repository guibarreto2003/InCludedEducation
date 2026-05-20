import readingImage from '../assets/reading.jpg'
import chronicleImage from '../assets/chronicle.jpg'
import grammarImage from '../assets/grammar.jpg'

const materials = [
  {
    id: 1,

    gradeKey: 'sixthGrade',
    subjectKey: 'readingInterpretation',

    title: 'Reading Interpretation Activities',

    image: readingImage,

    author: {
      name: 'Cirleide Santos',
      role: 'Portuguese Teacher'
    },

    preview:
      'Activities focused on reading comprehension and textual interpretation for middle school students.',

    description:
      'This material contains interpretation exercises, reading strategies, and classroom activities designed to improve critical reading skills and textual understanding.',

    reviews: [
      'Excellent for classroom practice.',
      'My students engaged a lot with the activities.',
      'Very organized and easy to use.'
    ]
  },

  {
    id: 2,

    gradeKey: 'ninthGrade',
    subjectKey: 'chronicle',

    title: 'Chronicle Study Material',

    image: chronicleImage,

    author: {
      name: 'Cirleide Santos',
      role: 'Portuguese Teacher'
    },

    preview:
      'Educational material about chronicles, narrative structure, and interpretation activities.',

    description:
      'This material explores the chronicle genre through reading activities, interpretation questions, and textual analysis exercises for 9th grade students.',

    reviews: [
      'Very helpful for teaching textual genres.',
      'The explanations are clear and practical.',
      'Great examples and activities.'
    ]
  },

  {
    id: 3,

    gradeKey: 'highSchool',
    subjectKey: 'grammar',

    title: 'High School Grammar Guide',

    image: grammarImage,

    author: {
      name: 'Cirleide Santos',
      role: 'Portuguese Teacher'
    },

    preview:
      'Grammar exercises and explanations for high school students.',

    description:
      'Complete grammar material with syntax, morphology, interpretation exercises, and practical activities designed for high school classes.',

    reviews: [
      'Excellent grammar explanations.',
      'Very complete material.',
      'Useful for both students and teachers.'
    ]
  }
]

export default materials