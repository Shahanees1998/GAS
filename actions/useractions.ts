'use server'

import prisma from "../lib/prisma"


export async function addEEI5J28(data: any): Promise<any> {
  console.log('+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++', data)
  return await prisma.eei.create({data: data })
}

export async function addEEK5L28(data: any): Promise<any> {
  return await prisma.eek.create({ data })
}

export async function addGASI5J28(data: any): Promise<any> {
  return await prisma.gasi.create({ data })
}

export async function addGASK5L28(data: any): Promise<any> {
  return await prisma.gask.create({ data })
}

export async function editEEI5J28(id:string, data: any): Promise<any> {
  return await prisma.eei.update({ where : {id}, data })
}

export async function editEEK5L28(id:string, data: any): Promise<any> {
  return await prisma.eek.update({ where : {id}, data })
}

export async function editGASI5J28(id:string, data: any): Promise<any> {
  return await prisma.gask.update({ where : {id}, data })
}

export async function editGASK5L28(id:string, data: any): Promise<any> {
  return await prisma.gasi.update({ where : {id}, data })
}


export async function deleteEEI5J28(id:string ): Promise<any> {
  return await prisma.eei.delete({ where : {id} })
}

export async function deleteEEK5L28(id:string): Promise<any> {
  return await prisma.eek.delete({ where : {id}  })
}

export async function deleteGASI5J28(id:string): Promise<any> {
  return await prisma.gask.delete({ where : {id}})
}

export async function deleteGASK5L28(id:string): Promise<any> {
  return await prisma.gasi.delete({ where : {id} })
}