## Here's my idea how we should represent each  "course" object, some of the attributes are outdated, go to the class definition to find more.
- A `Course`, is considered to be something like "CSC108"
  - Attributes:
    - String: courseCode
    - String: courseName
    - Array\<Section\>: Sections
  - TODO:
    - we shall also consider the prerequisite, TUT, exclusion, BR ...
- A `Section`, is an attribute of Course, like "LEC9901" or "TUT101"
- A `SubSection`, is an attribute of Section, like "the lecture on Monday or the lecture on Wednesday".
  - TODO: finish up the design