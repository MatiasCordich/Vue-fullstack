export const handleError = (res, type, error) => {
  res.status(type)
  res.json({msg: error})
}

export const handleSuccess = (res, type, msg, data) => {
    res.status(type)
    res.json({msg, data})
}