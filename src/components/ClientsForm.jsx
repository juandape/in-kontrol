'use client';

import { useState } from 'react';
import styles from '@styles/Form.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import Swal from 'sweetalert2';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const url = `${BASE_URL}/api/clients`;

const initialFormState = {
  name: '',
  email: '',
  phone: '',
  address: '',
  neighborhood: '',
  city: '',
  instagram: '',
};

export default function ClientsForm() {
  const router = useRouter();
  const [clientes, setClientes] = useState(initialFormState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(clientes);

    try {
      const res = await axios.post(url, clientes);
      console.log(res);
    } catch (error) {
      console.log(error);
    }

    setClientes(initialFormState);
    console.log('form submitted');
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Cliente creado',
      showConfirmButton: false,
      timer: 1500,
    });
    router.push('/ClientsListPage');
  };

  const handleChange = (e) => {
    setClientes({
      ...clientes,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className={styles.container}>
      <a href='/' className={styles.back}>
        ←
      </a>
      <h1 className={styles.Form__title}>Formulario Clientes</h1>
      <form className={styles.Form__container} onSubmit={handleSubmit}>
        <label className={styles.Form_container_label}>Nombre Cliente:</label>
        <input
          type='text'
          name='name'
          value={clientes.name}
          className={styles.Form__container__input}
          placeholder='ingresa el nombre'
          onChange={handleChange}
          required
        />

        <label className={styles.Form_container_label}>Email:</label>
        <input
          type='email'
          name='email'
          value={clientes.email}
          placeholder='correo@mail.com'
          pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          className={styles.Form__container__input}
          onChange={handleChange}
        />

        <label className={styles.Form_container_label}>Teléfono:</label>
        <input
          type='number'
          name='phone'
          value={clientes.phone}
          placeholder='celular'
          className={styles.Form__container__input}
          onChange={handleChange}
          maxLength={10}
        />

        <label className={styles.Form_container_label}>Dirección:</label>
        <input
          type='text'
          name='address'
          value={clientes.address}
          placeholder='calle 123 # 123-123'
          className={styles.Form__container__input}
          onChange={handleChange}
        />

        <label className={styles.Form_container_label}>Barrio:</label>
        <input
          type='text'
          name='neighborhood'
          value={clientes.neighborhood}
          placeholder='barrio'
          className={styles.Form__container__input}
          onChange={handleChange}
        />

        <label className={styles.Form_container_label}>Ciudad:</label>
        <input
          type='text'
          name='city'
          value={clientes.city}
          placeholder='ingresa la ciudad'
          className={styles.Form__container__input}
          onChange={handleChange}
        />

        <label className={styles.Form_container_label}>Instagram:</label>
        <input
          type='text'
          name='instagram'
          value={clientes.instagram}
          placeholder='@instagram'
          className={styles.Form__container__input}
          onChange={handleChange}
        />

        <button type='submit' className={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
}
