/*

LEE ESTO:

time:

**** TU FORMATO ERA ASI     time: "08:00 am - 09:15 am", ?????

rating:         ESTO ES UN int (numero normal sin "")

****   PUSE PUROS ENTEROS DEL 1 AL 5

*/

const eventEntries = [
  {
    name: 'Connect to Support - Assist for business PCs',
    description:
      'Learn how to maximize your ProSupport Suite for PCs experience.',
    type: 'Networking',
    location: 'Virtual',
    date: '03/23/2021',
    time: '08:00 am - 09:15 am',
    rating: 4,
    reviewCount: 13,
  },

  {
    name:
      'How Monitors Deepen Your Employee Experience & Support Your Workforce',
    description:
      'Dell Displays Product Line Managers will cover the features and functionality of our Large Format Displays and Meeting Space Solutions.',
    type: 'Training',
    location: '1 Dell Way, Round Rock, TX 78664',
    date: '03/08/2021',
    time: '10:00 am - 11:30 am',
    rating: 3,
    reviewCount: 15,
  },

  {
    name: 'Interactive Monitors and the Building Blocks for Meeting Rooms',
    description:
      'Technologies like interactive monitors (IM) and PCs in modern meeting rooms can make a difference in collaboration and employee engagement.',
    type: 'Networking',
    location: 'Virtual',
    date: '03/15/2021',
    time: '11:00 am - 11:45 am',
    rating: 4,
    reviewCount: 14,
  },

  {
    name: 'Adobe Creative Cloud & Document Cloud',
    description:
      'What is new with Creative Cloud and how the Document Cloud can help streamline your business.',
    type: 'Training',
    location: 'Virtual',
    date: '04/08/2021',
    time: '09:00 am - 10:30 am',
    rating: 3,
    reviewCount: 16,
  },

  {
    name: 'Connect to Support - Assist for business PCs 2',
    description:
      'Learn how to maximize your ProSupport Suite for PCs experience.',
    type: 'Team Building',
    location: '2101 Rosecrans Ave, El Segundo, CA 90245',
    date: '04/22/2021',
    time: '01:00 pm - 03:30 pm',
    rating: 4,
    reviewCount: 18,
  },

  {
    name: 'Digital Transformation in Pathology',
    description:
      'Explore the emerging area of Digital Pathology and its impact on current image storage requirements. Hear from Dell Technologies and their partners about how healthcare organizations are leveraging this new imaging discipline.',
    type: 'Training',
    location: 'Virtual',
    date: '03/25/2021',
    time: '01:00 pm - 02:30 pm',
    rating: 5,
    reviewCount: 17,
  },

  {
    name: '2021 Technology Outlook',
    description:
      '2020 pushed organizations to re-examine their business and technology priorities. IT complexity increased as did budgets, and security continued to be a focus. So where do we go from here?',
    type: 'Training',
    location: '2 Penn Plaza, NY 10121',
    date: '04/23/2021',
    time: '09:45 am - 11:00 am',
    rating: 4,
    reviewCount: 19,
  },

  {
    name: 'What are the Storage Implications for Digital Breast Tomosynthesis',
    description:
      'Understand current practices in efficient storage and management of these unique imaging studies.',
    type: 'Volunteer',
    location: 'Virtual',
    date: '03/18/2021',
    time: '02:00 pm - 02:30 pm',
    rating: 3,
    reviewCount: 13,
  },

  {
    name: 'Living in a multi-sensor world: How do I pull the systems together',
    description:
      'What a multi-sensor intelligent system could look like today and what tools you need to integrate these systems.',
    type: 'Team Building',
    location: 'Virtual',
    date: '04/10/2021',
    time: '10:00 am - 12:30 pm',
    rating: 4,
    reviewCount: 15,
  },

  {
    name:
      'Magic of A.I: How AI & Analytics is Impacting the Financial Services Industry',
    description:
      'Take a deep dive in the world of AI and how it is impacting the financial services industry.',
    type: 'Training',
    location: 'Virtual',
    date: '03/27/2021',
    time: '10:15 am - 11:15 am',
    rating: 5,
    reviewCount: 16,
  },
];

export default eventEntries;
// creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
// reviews: [reviewSchema],
