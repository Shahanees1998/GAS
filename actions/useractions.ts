'use server'

import prisma from "../lib/prisma"


export async function addUser (email: string): Promise<any> {
    return await prisma.user.create({data : {name : 'Anees', email}})
  }