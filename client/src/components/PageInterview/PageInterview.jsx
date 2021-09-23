import * as React from 'react';
import { Button, styled, Grid, Typography, Box, Avatar, Paper, ButtonBase } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from 'react'
import Question from '../Question/Question';
import { getOneInterview } from '../../redux/actions/oneInterview.action'
import { useState } from "react"
import { changesFavorite, newFavorite } from '../../redux/actions/changeFavorite.action'


export default function ComplexGrid() {

  const postId = useParams()
  // console.log("post ",postId.id)
  const dispatch = useDispatch()
  const oneInterview = useSelector((state) => state.oneInterview)
  const [favorite, setFavorite] = useState(oneInterview.favorites)
  const { User, Categorey } = oneInterview
  // console.log("0",oneInterview)

  useEffect(() => {
    dispatch(getOneInterview(postId.id))
  }, [])

  const handleFavorite = (id) => {
    dispatch(newFavorite(id))
    setFavorite(!favorite)
  }

  let arrOrg = []
  for (let i = 0; i < oneInterview?.Organizations?.length; i++) {
    arrOrg.push(oneInterview?.Organizations[i].title)
  }

  return (
    <div className="job-cards">
      {User && Categorey &&
        <div>
          <div className="job-overview-card">
            <div>
              {User.photo ?
               <img style={{ width: "100px", height: "100px", borderRadius: "50%" }}
               alt={User.firstName}
               src={User.photo}
             />
                :
                <img src="https://avatarko.ru/img/kartinka/1/panda_Pooh.jpg" alt="Avatar" className="avatar" />
              }
            </div>
          </div>
          <div >
            {oneInterview?.User.firstName}
            <div  >
              <span className="job-card-title">Организация:</span> {arrOrg.join(' ')}
            </div>
            <div>
              <span className="job-card-title"> Категория: </span>{oneInterview?.Categorey.categorey}
            </div>
            <div>
              <span className="job-card-title"> Позиция:</span> {oneInterview?.level}
            </div>
            <div>
              <span className="job-card-title">Должность: </span>{oneInterview?.name}
            </div>
            <div>
              <span className="job-card-title"> Дата собеедования: </span> {oneInterview?.data}
            </div>
            <div>
              <span className="job-card-title">Описание:</span> {oneInterview?.description}
            </div>
            <div >
              <span className="job-card-title">Вопросы:</span>
              {oneInterview?.Questions && oneInterview?.Questions.map((item, index) => <div className="col-4" key={item.id}><Question {...item} index={index} /></div>)}
            </div>
          </div>
          <div>
            <div>
              <button className="search-buttons detail-button" onClick={() => handleFavorite(oneInterview.id)} type="button"> {favorite ? 'Удалить из избранного' : 'В избранное'}</button>
            </div>
          </div>
        </div>}
    </div >
  );
}

