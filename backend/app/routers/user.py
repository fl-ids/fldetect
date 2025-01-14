from fastapi import FastAPI, Response, status, HTTPException, Depends, APIRouter
from sqlalchemy.orm import Session
from .. import models, schemas, utils
from ..database import get_db
from fastapi.responses import JSONResponse
from uuid import uuid4

router = APIRouter(
    tags=['Users']
)

# /users/
# /users


@router.post("/users", status_code=status.HTTP_201_CREATED, response_model=schemas.UserOut)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):

    # hash the password - user.password
    hashed_password = utils.hash(user.password)
    user.password = hashed_password
    unique_id = str(uuid4())

    new_user = models.User(**user.dict())
    new_user.device_unique_id = unique_id
    db.add(new_user)
    db.commit()
    db.refresh(new_user)


    return new_user



# @router.post("/", status_code=status.HTTP_201_CREATED, response_model=schemas.UserOut)
# def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
#     # hash the password - user.password
#     hashed_password = utils.hash(user.password)
#     user.password = hashed_password

#     new_user = models.User(**user.dict())
    
#     # Generate a unique device ID (UUID)
#     unique_device_id = str(uuid4())
#     new_user.id = unique_device_id

#     db.add(new_user)
#     db.commit()
#     db.refresh(new_user)

#     # Return the user details along with the unique device ID
#     return {"unique_device_id": new_user.id}


@router.get('/{id}', response_model=schemas.UserOut)
def get_user(id: int, db: Session = Depends(get_db), ):
    user = db.query(models.User).filter(models.User.id == id).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"User with id: {id} does not exist")

    return user