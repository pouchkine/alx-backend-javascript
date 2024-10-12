export default function updateStudentGradeByCity(students, city, scores) {
 const filts = students.filter((element) => { if (element.location == city) { return true; } }); const maps = filts; for (map_ of maps) { for (score of scores) { if (map_.id == score.o_id) { map_.score = score.score; } } } return maps;
}
