export class Student {
	id: string;
	username: string;
	password: string;
	name: string;
	email: string;
	phone: string;
	address: string;
	avatar: string;
	identification: string;
	student_id: string;
	birthday: string;
	gender: string;
	major: string;
	specialize: string;
	course: string;
	status: string;
	start_date: string;
	create_date: string;
	update_date: string;
	delete_status: string;

	constructor(student: any){
		this.id = student.id;
		this.username = student.username;
		this.password = student.password;
		this.name = student.name;
		this.email = student.email;
		this.phone = student.phone;
		this.address = student.address;
		this.avatar = student.avatar;
		this.identification = student.identification;
		this.student_id = student.student_id;
		this.birthday = student.birthday;
		this.gender = student.gender;
		this.major = student.major;
		this.specialize = student.specialize;
		this.course = student.course;
		this.status = student.status;
		this.start_date = student.start_date;
		this.create_date = student.create_date;
		this.update_date = student.update_date;
		this.delete_status = student.delete_status;
	}
}