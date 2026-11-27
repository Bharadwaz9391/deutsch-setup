import type { LessonContent } from "@/lib/types";
import { M00 } from "./m00";
import { M01 } from "./m01";
import { M02 } from "./m02";
import { M03 } from "./m03";
import { M04 } from "./m04";
import { M05 } from "./m05";
import { M06 } from "./m06";
import { M07 } from "./m07";
import { M08 } from "./m08";
import { M09 } from "./m09";
import { M10 } from "./m10";
import { M11 } from "./m11";
import { M12 } from "./m12";
import { M13 } from "./m13";
import { M14 } from "./m14";
import { M15 } from "./m15";

// Teaching content per lesson. Each module file holds its 4 lessons.
// After changing any text, regenerate the audio: npm run course:audio
const ALL: LessonContent[] = [
  ...M00,
  ...M01,
  ...M02,
  ...M03,
  ...M04,
  ...M05,
  ...M06,
  ...M07,
  ...M08,
  ...M09,
  ...M10,
  ...M11,
  ...M12,
  ...M13,
  ...M14,
  ...M15,
];

export const LESSONS: Record<string, LessonContent> = Object.fromEntries(ALL.map((l) => [l.id, l]));

export function getLesson(id: string): LessonContent | undefined {
  return LESSONS[id];
}
