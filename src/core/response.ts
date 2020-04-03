export enum ResponseGoal {
  FACULTY = 'faculty',        // факультет
  SPECIALTY = 'specialty',    // специальность
  UNIVERSITY = 'university',  // университет
  DEPARTMENT = 'department',  // кафедра
  DORMS = 'dorms',            // общага
  SCORE = 'score',    // проходной балл
};

export class Response {
  public goal: ResponseGoal;
  public expression: string;
  public reply: string;

  public match(text: string) {
    const regexp = new RegExp(this.expression, 'i');
    return regexp.test(text);
  }
};
