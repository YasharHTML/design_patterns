class Doctor {
    public name?: string
    public surname?: string
}

class DoctorBuilder {
    private doctor!: Doctor;

    constructor() {
        this.reset();
    }

    reset() {
        this.doctor = new Doctor();
    }

    name(value: string) {
        this.doctor.name = value;
        return this;
    }

    surname(value: string) {
        this.doctor.surname = value;
        return this;
    }

    build() {
        return this.doctor
    }
}

const doctor = new DoctorBuilder().name("Cristiano").surname("Ronaldo").build();
console.log(doctor);