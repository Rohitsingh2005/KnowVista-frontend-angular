export interface RightsRule {
    id: number;
    type: 'RIGHT' | 'RULE' | 'GUIDELINE' | 'ADMIN';
    icon: string;
    text: string;
  }

  export const KNOWVISTA_RULES: RightsRule[] = [
    // USER RIGHTS
    {
      id: 1,
      type: 'RIGHT',
      icon: 'pi pi-check-circle',
      text: 'You can create and manage your own KnowVista account.'
    },
    {
      id: 2,
      type: 'RIGHT',
      icon: 'pi pi-check-circle',
      text: 'You can post questions, answers, and comments freely.'
    },
    {
      id: 3,
      type: 'RIGHT',
      icon: 'pi pi-check-circle',
      text: 'You own the content you publish on KnowVista.'
    },
  
    // USER RULES
    {
      id: 4,
      type: 'RULE',
      icon: 'pi pi-times-circle',
      text: 'No abusive, hateful, or offensive language is allowed.'
    },
    {
      id: 5,
      type: 'RULE',
      icon: 'pi pi-times-circle',
      text: 'Spamming and fake content is strictly prohibited.'
    },
    {
      id: 6,
      type: 'RULE',
      icon: 'pi pi-times-circle',
      text: 'Do not share private information of other users.'
    },
  
    // CONTENT GUIDELINES
    {
      id: 7,
      type: 'GUIDELINE',
      icon: 'pi pi-info-circle',
      text: 'All posts must be relevant to the topic.'
    },
    {
      id: 8,
      type: 'GUIDELINE',
      icon: 'pi pi-info-circle',
      text: 'Illegal activities or promotions are not allowed.'
    },
  
    // ADMIN RIGHTS
    {
      id: 9,
      type: 'ADMIN',
      icon: 'pi pi-lock',
      text: 'Admins can remove harmful or inappropriate content.'
    },
    {
      id: 10,
      type: 'ADMIN',
      icon: 'pi pi-lock',
      text: 'Admins may suspend or ban accounts violating rules.'
    }
  ];
    