import { nanoid } from 'nanoid';

class Course {
  constructor(
    id,
    { courseName, category, price, language, email, stack, teachingAssist },
  ) {
    this.id = id;
    this.courseName = courseName;
    this.category = category;
    this.price = price;
    this.language = language;
    this.email = email;
    this.stack = stack;
    this.teachingAssist = teachingAssist;
  }
}

const courseHolder = {};

const resolvers = {
  getCourse: ({ id }) => new Course(id, courseHolder[id]),
  createCourse: ({ input }) => {
    const id = nanoid();
    courseHolder[id] = input;
    return new Course(id, input);
  },
};
