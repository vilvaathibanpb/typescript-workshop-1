export const getFullName = (contact) => {
    return [contact.firstName, contact.middleName, contact.lastName]
      .filter(Boolean)
      .join(" ");
  }