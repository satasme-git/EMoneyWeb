package satasme.promo.web.entity;

import java.util.Collection;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name="id_user")
	long id;
	@Column(name="f_name")
	String fname;
	@Column(name="l_name")
	String lname;
	@Column(name="email")
	String email;
	@Column(name="tempemail")
	String tempemail;
	@Column(name="img")
	String img;
	@Column(name="mobile")
	int mobile;
//	
	@Column(name="whatsapp")
	@ColumnDefault(value = "0")
	int whatsapp;
	@Column(name="viber")
	@ColumnDefault(value = "0")
	int viber;
	@Column(name="teligram")
	@ColumnDefault(value = "0")
	int teligram;
	@Column(name="wechat")
	String wechat;
	@Column(name="fbplink")
	String fbplink;
	
	@Column(name="addresLine1")
	String addresLine1;
	@Column(name="addresLine2")
	String addresLine2;
	@Column(name="resizipcode")
	String resizipcode;
	@Column(name="residistrict")
	String residistrict;
	@Column(name="resiprovince")
	String resiprovince;
	@Column(name="resinetialcountry")
	String resinetialcountry;
	
	@Column(name="age")
	String age;
	
	@Column(name="location")
	String location;
	@Column(name="status")
	String status;
	@Column(name="level")
	String level;
	@Column(name="country")
	String country;
	@Column(name="gender")
	String gender;
	@Column(name="dob")
	String dob;
	@Column(name="specialization")
	String specialization;
	@Column(name="education")
	String education;
	@Column(name="refcode")
	String refcode;
	@Column(name="reg_date")
	String regdate;
	
	@Column(name="university")
	String university;
	@Column(name="collage")
	String collage;
	
	@Column(name="occupation")
	String occupation;
	@Column(name="employer")
	String employer;
	@Column(name="designation")
	String designation;
	@Column(name="hobbies")
	String hobbies;
	
	@Column(name="currentLiving")
	String currentLiving;
	@Column(name="resident")
	String resident;
	@Column(name="idnumber")
	String idnumber;
	@Column(name="passport")
	String passport;
	
	public User() {
		
	}

	public User(String fname, String lname, String email, String img, int mobile, String location, String status,
			String level, String country, String gender, String dob, String specialization, String education,String refcode) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.img = img;
		this.mobile = mobile;
		this.location = location;
		this.status = status;
		this.level = level;
		this.country = country;
		this.gender = gender;
		this.dob = dob;
		this.specialization = specialization;
		this.education = education;
		this.refcode=refcode;
	}
	

	public String getRefcode() {
		return refcode;
	}

	public void setRefcode(String refcode) {
		this.refcode = refcode;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getSpecialization() {
		return specialization;
	}

	public void setSpecialization(String specialization) {
		this.specialization = specialization;
	}

	public String getEducation() {
		return education;
	}

	public void setEducation(String education) {
		this.education = education;
	}

	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public int getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}

	public String getTempemail() {
		return tempemail;
	}

	public void setTempemail(String tempemail) {
		this.tempemail = tempemail;
	}

	public String getRegdate() {
		return regdate;
	}

	public void setRegdate(String regdate) {
		this.regdate = regdate;
	}

	public int getWhatsapp() {
		return whatsapp;
	}

	public void setWhatsapp(int whatsapp) {
		this.whatsapp = whatsapp;
	}

	public int getViber() {
		return viber;
	}

	public void setViber(int viber) {
		this.viber = viber;
	}

	public int getTeligram() {
		return teligram;
	}

	public void setTeligram(int teligram) {
		this.teligram = teligram;
	}

	public String getWechat() {
		return wechat;
	}

	public void setWechat(String wechat) {
		this.wechat = wechat;
	}

	public String getFbplink() {
		return fbplink;
	}

	public void setFbplink(String fbplink) {
		this.fbplink = fbplink;
	}

	public String getAge() {
		return age;
	}

	public void setAge(String age) {
		this.age = age;
	}

	public String getUniversity() {
		return university;
	}

	public void setUniversity(String university) {
		this.university = university;
	}

	public String getCollage() {
		return collage;
	}

	public void setCollage(String collage) {
		this.collage = collage;
	}

	public String getOccupation() {
		return occupation;
	}

	public void setOccupation(String occupation) {
		this.occupation = occupation;
	}

	public String getEmployer() {
		return employer;
	}

	public void setEmployer(String employer) {
		this.employer = employer;
	}

	public String getDesignation() {
		return designation;
	}

	public void setDesignation(String designation) {
		this.designation = designation;
	}

	public String getHobbies() {
		return hobbies;
	}

	public void setHobbies(String hobbies) {
		this.hobbies = hobbies;
	}

	public String getCurrentLiving() {
		return currentLiving;
	}

	public void setCurrentLiving(String currentLiving) {
		this.currentLiving = currentLiving;
	}

	public String getResident() {
		return resident;
	}

	public void setResident(String resident) {
		this.resident = resident;
	}

	public String getIdnumber() {
		return idnumber;
	}

	public void setIdnumber(String idnumber) {
		this.idnumber = idnumber;
	}

	public String getPassport() {
		return passport;
	}

	public void setPassport(String passport) {
		this.passport = passport;
	}

	public String getAddresLine1() {
		return addresLine1;
	}

	public void setAddresLine1(String addresLine1) {
		this.addresLine1 = addresLine1;
	}

	public String getAddresLine2() {
		return addresLine2;
	}

	public void setAddresLine2(String addresLine2) {
		this.addresLine2 = addresLine2;
	}

	public String getResizipcode() {
		return resizipcode;
	}

	public void setResizipcode(String resizipcode) {
		this.resizipcode = resizipcode;
	}

	public String getResidistrict() {
		return residistrict;
	}

	public void setResidistrict(String residistrict) {
		this.residistrict = residistrict;
	}

	public String getResiprovince() {
		return resiprovince;
	}

	public void setResiprovince(String resiprovince) {
		this.resiprovince = resiprovince;
	}

	public String getResinetialcountry() {
		return resinetialcountry;
	}

	public void setResinetialcountry(String resinetialcountry) {
		this.resinetialcountry = resinetialcountry;
	}
	
}
