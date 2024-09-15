package pet;

public class Animal {

	private Long id_Animal;
	private Enum specie;
	private String race;
	private String name;
	private Double height;
	private Double weight;
	private Date birthDate;
	private Enum bloodtype;
	
	public Animal(Long idAnimal, Species species, String race, String name, Double height, Double weight, Date birthDate, BloodType bloodType) {
        this.idAnimal = idAnimal;
        this.species = species;
        this.race = race;
        this.name = name;
        this.height = height;
        this.weight = weight;
        this.birthDate = birthDate;
        this.bloodType = bloodType;
    }

    // Getters e Setters
    public Long getIdAnimal() {
        return idAnimal;
    }

    public void setIdAnimal(Long idAnimal) {
        this.idAnimal = idAnimal;
    }

    public Species getSpecies() {
        return species;
    }

    public void setSpecies(Species species) {
        this.species = species;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getHeight() {
        return height;
    }

    public void setHeight(Double height) {
        this.height = height;
    }

    public Double getWeight() {
        return weight;
    }

    public void setWeight(Double weight) {
        this.weight = weight;
    }

    public Date getBirthDate() {
        return birthDate;
    }

    public void setBirthDate(Date birthDate) {
        this.birthDate = birthDate;
    }

    public BloodType getBloodType() {
        return bloodType;
    }

    public void setBloodType(BloodType bloodType) {
        this.bloodType = bloodType;
    }

}
