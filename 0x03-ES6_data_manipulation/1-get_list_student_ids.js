export default getListStudentIds(arr) 
{
if(arr.contructor !== [].constructor) {
	return []};
else {

	return arr.map( (element) => {return element.id} )

}

}
