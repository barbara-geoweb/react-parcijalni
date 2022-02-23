import React from "react";
import PropTypes from "prop-types";

const styles = {
  container: {
    textAlign: "justify",
  },
  titleContainer: {
    display: "flex",
    alignItems: "center",
    marginBottom: 24,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 64,
    display: "inline",
    marginLeft: 36,
  },
};

export default function User({ users }) {
  if (!users) {
    return null;
  }

  const { avatar_url, bio, name, location } = users;

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <img src={avatar_url} alt="No logo" style={styles.image} />
        <span style={styles.name}>{name}</span>
      </div>
      <p>BIO: {bio}</p>
      <p>LOCATION: {location}</p>
    </div>
  );
}

User.propTypes = {
  users: PropTypes.object,
};
