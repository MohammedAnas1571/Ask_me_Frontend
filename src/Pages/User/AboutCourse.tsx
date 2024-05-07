import { useParams } from "react-router-dom";

import CourseDescription from "@/components/AboutPage/CourseDescription";
import { useCourseDetails } from "@/CustomHook/useCourseDetails";

const AboutCourse = () => {
  const { id } = useParams();
  const { course, chapters,purchased } = useCourseDetails(id!);
  return (
    <>{course  && <CourseDescription purchased={purchased} course={course} chapters={chapters!} />}</>
  );
};

export default AboutCourse;
